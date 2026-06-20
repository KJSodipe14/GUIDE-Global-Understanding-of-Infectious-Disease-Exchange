const outbreakModel = require("../models/outbreak.js")
const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
  try{
    const outbreaks = await outbreakModel.find()
    res.json(outbreaks)
  } catch(err) {
    res.status(500).json({ error: err.message })
  }
});

module.exports = router;