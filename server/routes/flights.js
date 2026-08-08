const express = require('express')
const router = express.Router()
const axios = require('axios')

// Hubs to check for a connection when no direct flight exists, with their
// coordinates baked in so the frontend can plot the connecting city without
// a separate geocoding call. Doesn't need to be exhaustive — these cover
// most long-haul routing.
const HUB_COORDS = {
  JFK: { lat: 40.6413, lng: -73.7781 },
  LHR: { lat: 51.4700, lng: -0.4543 },
  DXB: { lat: 25.2532, lng: 55.3657 },
  ATL: { lat: 33.6407, lng: -84.4277 },
  ORD: { lat: 41.9742, lng: -87.9073 },
  CDG: { lat: 49.0097, lng: 2.5479 },
  SIN: { lat: 1.3644, lng: 103.9915 },
  FRA: { lat: 50.0379, lng: 8.5622 },
}
const HUBS = Object.keys(HUB_COORDS)

const MIN_LAYOVER_MINUTES = 45
const MAX_LAYOVER_MINUTES = 12 * 60

async function fetchLeg(dep_iata, arr_iata) {
  const response = await axios.get(`http://api.aviationstack.com/v1/flights`, {
    params: {
      access_key: process.env.AVIATION_API_KEY,
      dep_iata,
      arr_iata,
      limit: 5
    }
  })

  // AviationStack returns HTTP 200 even when something's wrong (bad plan tier,
  // rate limit, invalid params) — the failure shows up as an `error` object in
  // the body instead of a thrown exception. Without this check, that error was
  // silently treated as "zero flights found," identical to a real empty result.
  if (response.data.error) {
    console.error(`AviationStack error for ${dep_iata}->${arr_iata}:`, response.data.error)
    return []
  }

  return response.data.data || []
}

async function findConnectingFlight(dep_iata, arr_iata) {
  for (const hub of HUBS) {
    if (hub === dep_iata || hub === arr_iata) continue

    const firstLegOptions = await fetchLeg(dep_iata, hub)
    const secondLegOptions = await fetchLeg(hub, arr_iata)

    if (firstLegOptions.length === 0 || secondLegOptions.length === 0) continue

    for (const firstFlight of firstLegOptions) {
      const hubArrival = new Date(firstFlight.arrival.scheduled)

      for (const secondFlight of secondLegOptions) {
        const hubDeparture = new Date(secondFlight.departure.scheduled)

        const layoverMinutes = (hubDeparture - hubArrival) / (1000 * 60)

        if (layoverMinutes >= MIN_LAYOVER_MINUTES && layoverMinutes <= MAX_LAYOVER_MINUTES) {
          return { hub, legs: [firstFlight, secondFlight] }
        }
      }
    }
  }

  return null
}

router.get('/', async (req, res) => {
  const { dep_iata, arr_iata } = req.query
  if (!dep_iata || !arr_iata) return res.status(400).json({ error: 'Missing IATA codes' })

  try {
    const direct = await fetchLeg(dep_iata, arr_iata)
    if (direct.length > 0) {
      return res.json({ type: 'direct', legs: [direct[0]] })
    }

    const connection = await findConnectingFlight(dep_iata, arr_iata)
    if (connection) {
      return res.json({
        type: 'connecting',
        legs: connection.legs,
        hub: { iata: connection.hub, ...HUB_COORDS[connection.hub] }
      })
    }

    res.json({ type: 'none', legs: [] })
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch flights' })
  }
})

module.exports = router