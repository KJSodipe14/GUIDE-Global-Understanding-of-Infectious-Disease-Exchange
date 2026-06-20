const axios = require("axios");

async function geocode(location) {
  if (!location || location.trim() === "") return null;

  
  const response = await axios.get(
    `https://api.opencagedata.com/geocode/v1/json?q=${location}&key=${process.env.OPENCAGE_API_KEY}`,
  );

  if (response.data.results.length === 0) {
    return null;
  }

  return response.data.results[0].geometry;
}

module.exports = { geocode };
