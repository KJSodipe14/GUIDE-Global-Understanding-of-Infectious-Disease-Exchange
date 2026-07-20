const axios = require("axios");

async function geocode(location) {
  if (!location || location.trim() === "") return null;

  
  const response = await axios.get(
    `https://api.opencagedata.com/geocode/v1/json?q=${encodeURIComponent(location)}&key=${process.env.OPENCAGE_API_KEY}`,
  );

  if (response.data.results.length === 0) {
    return null;
  }

  //console.log(JSON.stringify(response.data.results[0], null, 2))
  return response.data.results[0].geometry;
}

module.exports = { geocode };
