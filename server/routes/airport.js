const express = require('express')
const router = express.Router()
const { getIATA } = require('../services/airportService')

router.get('/', (req, res) => {
    const { city } = req.query
    if (!city) return res.status(400).json({ error: 'city required' })
    
    const iata = getIATA(city)
    if (!iata) return res.status(404).json({ error: 'Airport not found' })

    res.json({ iata })
})

module.exports = router