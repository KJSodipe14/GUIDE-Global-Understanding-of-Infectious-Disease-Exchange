const dotenv = require("dotenv")
dotenv.config()

const gemini = require("@google/generative-ai");
console.log("Gemini key:", process.env.GEMINI_API_KEY)
const GenAI = new gemini.GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = GenAI.getGenerativeModel({ model: "gemini-2.0-flash" });

async function analyzeOutbreak(outbreak) {
  const prompt = `You are a disease outbreak analyst. Given this outbreak information:
    Title: ${outbreak.Title}
    Summary: ${outbreak.Summary}
    
    Please provide:
    1. A plain English summary of this outbreak
    2. An assessment of whether this has pandemic or epidemic potential and why`;

  const response = await model.generateContent(prompt);
  const text = response.response.text();

  return text;
}

module.exports = { analyzeOutbreak };
