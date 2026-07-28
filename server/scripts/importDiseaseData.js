const mongoose = require('mongoose')
const dotenv = require('dotenv')
const fs = require('fs')
const path = require('path')
const { parse } = require('csv-parse/sync')
dotenv.config()

const Outbreak = require('../models/outbreak')
const geocodeService = require('../services/geocodeService')

function parseDateRange(dateStr) {
  if (!dateStr || dateStr.trim() === '----' || dateStr.trim() === '') return null
  const normalized = dateStr.replace(/–/g, '-').trim()
  const monthMap = {
    january: 0, february: 1, march: 2, april: 3, may: 4, june: 5,
    july: 6, august: 7, september: 8, october: 9, november: 10, december: 11
  }
  const rangeMatch = normalized.match(/(\w+)\s+(\d+)\s*-\s*(\w+)\s+(\d+),?\s*(\d{4})/)
  if (rangeMatch) {
    const [, m1, d1, m2, d2, year] = rangeMatch
    const start = new Date(parseInt(year), monthMap[m1.toLowerCase()], parseInt(d1))
    const end = new Date(parseInt(year), monthMap[m2.toLowerCase()], parseInt(d2))
    return { start, end }
  }
  const singleMatch = normalized.match(/(\w+)\s+(\d+),?\s*(\d{4})/)
  if (singleMatch) {
    const [, month, day, year] = singleMatch
    const date = new Date(parseInt(year), monthMap[month.toLowerCase()], parseInt(day))
    return { start: date, end: date }
  }
  const monthOnlyMatch = normalized.match(/(\w+)\s+(\d{4})/)
  if (monthOnlyMatch) {
    const [, month, year] = monthOnlyMatch
    const start = new Date(parseInt(year), monthMap[month.toLowerCase()], 1)
    const end = new Date(parseInt(year), monthMap[month.toLowerCase()] + 1, 0)
    return { start, end }
  }
  return null
}

function getDatesInRange(start, end) {
  const dates = []
  const current = new Date(start)
  while (current <= end) {
    dates.push(new Date(current).toISOString())
    current.setDate(current.getDate() + 1)
  }
  return dates
}

function parseCaseCount(val) {
  if (!val || val === '----') return null
  const match = String(val).replace(/,/g, '').match(/\d+/)
  return match ? parseInt(match[0]) : null
}

async function importData() {
  await mongoose.connect(process.env.MONGO_URI)
  console.log('Connected to MongoDB')
  const csvPath = path.join(__dirname, '../../Disease_Table_-_Disease.csv')
  const content = fs.readFileSync(csvPath, 'utf8')
  const records = parse(content, { columns: true, skip_empty_lines: true, trim: true })
  console.log(`Found ${records.length} records in CSV`)
  let inserted = 0, skipped = 0, errors = 0
  for (const record of records) {
    const disease = record['Disease']?.trim()
    const dateStr = record['Date']?.trim()
    const location = record['Location (state/province level)']?.trim()
    const casesRaw = record['No. of Cases']?.trim()
    const source = record['Source']?.trim()
    if (!disease || !location || location === '----' || !dateStr || dateStr === '----') { skipped++; continue }
    const dateRange = parseDateRange(dateStr)
    if (!dateRange) { console.log(`Could not parse date: "${dateStr}"`); skipped++; continue }
    let lat = null, lng = null
    try {
      const geo = await geocodeService.geocode(location)
      if (geo) { lat = geo.lat; lng = geo.lng }
    } catch (e) { console.log('Geocode failed for:', location) }
    const dates = getDatesInRange(dateRange.start, dateRange.end)
    for (const date of dates) {
      const whoId = `csv-${disease}-${location}-${date.slice(0, 10)}`.replace(/\s+/g, '-').toLowerCase().slice(0, 200)
      const existing = await Outbreak.findOne({ whoId })
      if (existing) { skipped++; continue }
      try {
        await Outbreak.create({
          disease, city: location, country: null, latitude: lat, longitude: lng,
          status: 'active', reportedDate: date, caseCount: parseCaseCount(casesRaw),
          newsLink: source?.startsWith('http') ? source : null,
          newsTitle: disease, whoId, analysis: null,
        })
        inserted++
      } catch (e) { console.log('Insert error:', e.message); errors++ }
    }
    await new Promise(r => setTimeout(r, 300))
    console.log(`✓ ${disease} - ${location} (${dates.length} days)`)
  }
  console.log(`\nDone! Inserted: ${inserted}, Skipped: ${skipped}, Errors: ${errors}`)
  mongoose.disconnect()
}

importData().catch(console.error)
