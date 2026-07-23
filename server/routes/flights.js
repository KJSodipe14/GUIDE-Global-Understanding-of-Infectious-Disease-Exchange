const express = require('express')
const router = express.Router()
const axios = require('axios')

router.get('/', async (req, res) => {
  const { dep_iata, arr_iata } = req.query
  if (!dep_iata || !arr_iata) return res.status(400).json({ error: 'Missing IATA codes' })

  try {
    const response = await axios.get(`http://api.aviationstack.com/v1/flights`, {
      params: {
        access_key: process.env.AVIATION_API_KEY,
        dep_iata,
        arr_iata,
        limit: 10
      }
    })
    res.json(response.data)
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch flights' })
  }
})

module.exports = router