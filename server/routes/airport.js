const express = require('express')
const router = express.Router()
const { getIATA, getNearestIATA } = require('../services/airportService')

router.get('/', (req, res) => {
    const { city, lat, lng } = req.query
    if (!city) return res.status(400).json({ error: 'city required' })

    let iata = getIATA(city)
    let source = 'name'

    // Name lookup found nothing — fall back to nearest major airport by
    // coordinates, if the caller provided them. This is what makes small,
    // never-hardcoded towns (e.g. "Mongbwalu") still resolve to something.
    if (!iata && lat && lng) {
        iata = getNearestIATA(parseFloat(lat), parseFloat(lng))
        source = 'nearest'
    }

    if (!iata) return res.status(404).json({ error: 'Airport not found' })

    res.json({ iata, source })
})

module.exports = router