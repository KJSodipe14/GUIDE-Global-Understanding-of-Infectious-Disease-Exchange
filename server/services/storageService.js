const whoService = require("./whoService.js");
const geocodeService = require("./geocodeService.js");
const outbreakModel = require("../models/outbreak.js");
const geminiService = require("./geminiService.js")

async function fetchAndSaveOutbreaks() {
  const outbreaks = await whoService.getOutbreaks();

  const results = [];

  for (const outbreak of outbreaks) {
      const parts =
        outbreak.Title.split(" – ").length > 1
          ? outbreak.Title.split(" – ")
          : outbreak.Title.split(" - ");
      const location = parts.slice(1).join(', ')
      const existing = await outbreakModel.findOne({ whoId: outbreak.Id });
      const hasAnalysis = existing && existing.analysis;
      let gemini = null

      //console.log("Processing:", outbreak.Title, "| hasAnalysis:", hasAnalysis);
      try {
        gemini = !hasAnalysis && outbreak.Summary
        ? await geminiService.analyzeOutbreak(outbreak)
        : null
      } catch (err) {
        console.log("Gemini failed:", err.message)
      }
      //console.log("Gemini result:", gemini);

      const geocodeTarget = (gemini && gemini.city) || (existing && existing.city) || location;
      const geocode = await geocodeService.geocode(geocodeTarget);



      const result = {
        disease: outbreak.Title,
        latitude: geocode ? geocode.lat : null,
        longitude: geocode ? geocode.lng : null,
        city: gemini ? gemini.city : (existing ? existing.city : null) || location || null,
        status: gemini ? gemini.status : (existing ? existing.status : null),
        reportedDate: outbreak.PublicationDateAndTime || null,
        caseCount: gemini ? gemini.caseCount : (existing ? existing.caseCount : null),
        newsLink: `https://www.who.int/emergencies/disease-outbreak-news/item${outbreak.ItemDefaultUrl}`,
        newsTitle: outbreak.Title,
        whoId: outbreak.Id,
        analysis: gemini ? gemini.analysis : (existing ? existing.analysis : null),
      };


    results.push(result);

    await new Promise(resolve => setTimeout(resolve, 4000))
  }
    

  for (const result of results) {
    await outbreakModel.findOneAndUpdate(
        { whoId: result.whoId },
         result, 
         {upsert: true,}
        );
  }
}

module.exports = { fetchAndSaveOutbreaks };
