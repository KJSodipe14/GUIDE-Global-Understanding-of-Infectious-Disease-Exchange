const geminiService = require("../services/geminiService.js");
const geocodeService = require("../services/geocodeService.js");
const whoService = require("../services/whoService.js");
const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const outbreaks = await whoService.getOutbreaks();

    const limitedOutbreaks = outbreaks.slice(0, 5)
    const results = await Promise.all(
      limitedOutbreaks.map(async (outbreak) => {
        const parts = outbreak.Title.split(" – ").length > 1
        ? outbreak.Title.split(" – ")
        : outbreak.Title.split(" - ")
        const country = parts[parts.length - 1]
        const geocode = await geocodeService.geocode(country);
        const gemini = outbreak.Summary
        ? await geminiService.analyzeOutbreak(outbreak)
        : null

        return {
          diseaseName: outbreak.Title,
          latCoord: geocode ? geocode.lat : null,
          lngCoord: geocode ? geocode.lng : null,
          analysis: gemini,
        };
      }),
    );
    res.json(results);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
