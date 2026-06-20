const whoService = require("./whoService.js");
const geocodeService = require("./geocodeService.js");
const outbreakModel = require("../models/outbreak.js");
const geminiService = require("./geminiService.js")

async function fetchAndSaveOutbreaks() {
  const outbreaks = await whoService.getOutbreaks();

  const results = await Promise.all(
    outbreaks.map(async (outbreak) => {
      const parts =
        outbreak.Title.split(" – ").length > 1
          ? outbreak.Title.split(" – ")
          : outbreak.Title.split(" - ");
      const location = parts.slice(1).join(', ')
      const geocode = await geocodeService.geocode(location);
      let gemini = null
      /*try {
        gemini = outbreak.Summary
        ? await geminiService.analyzeOutbreak(outbreak)
        : null
      } catch (err) {
        console.log("Gemini failed:", err.message)
      }*/

      return {
        disease: outbreak.Title,
        latitude: geocode ? geocode.lat : null,
        longitude: geocode ? geocode.lng : null,
        city: null,
        status: null,
        reportedDate: null,
        caseCount: null,
        newsLink: `https://www.who.int/emergencies/disease-outbreak-news/item${outbreak.ItemDefaultUrl}`,
        newsTitle: outbreak.Title,
        whoId: outbreak.Id,
        analysis: gemini,
      };
    }),
  );

  for (const result of results) {
    await outbreakModel.findOneAndUpdate(
        { whoId: result.whoId },
         result, 
         {upsert: true,}
        );
  }
}

module.exports = { fetchAndSaveOutbreaks };
