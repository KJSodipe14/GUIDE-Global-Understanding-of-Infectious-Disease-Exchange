const axios = require("axios");

async function getOutbreaks() {
  const sixMonthsAgo = new Date();
  sixMonthsAgo.setMonth(sixMonthsAgo.getMonth() - 6);
  const filterDate = sixMonthsAgo.toISOString();


  const response = await axios.get("https://www.who.int/api/news/diseaseoutbreaknews", {
  params: {
    "$filter": `PublicationDateAndTime ge ${filterDate}`
  }
});

return response.data.value;
}

module.exports = { getOutbreaks };
