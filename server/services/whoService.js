const axios = require("axios");

async function getOutbreaks() {
  const response = await axios.get("https://www.who.int/api/news/diseaseoutbreaknews");
  console.log(response.data)
  return response.data.value;
}

module.exports = { getOutbreaks };
