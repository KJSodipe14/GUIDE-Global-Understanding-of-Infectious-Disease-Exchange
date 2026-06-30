const dotenv = require("dotenv")
dotenv.config()

const gemini = require("@google/generative-ai");
const GenAI = new gemini.GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = GenAI.getGenerativeModel({ model: "gemini-3.1-flash-lite" });

async function analyzeOutbreak(outbreak) {
  const prompt = `You are a disease outbreak analyst. Given this outbreak information:
    Title: ${outbreak.Title}
    Summary: ${outbreak.Summary}
    
    Extract and return ONLY a JSON object with these fields:
    {
      "city": "the specific city or region of the outbreak, or null if unknown",
      "status": "active or resolved",
      "caseCount": number of cases as an integer or null if unknown,
      "analysis": "2-3 sentence plain English summary and pandemic potential assessment"
    }
      
    Return ONLY the JSON object, no other text.`;

  const response = await model.generateContent(prompt);
  const text = response.response.text();
  const clean = text.replace(/```json|```/g, '').trim()
  return JSON.parse(clean);
}

module.exports = { analyzeOutbreak };
