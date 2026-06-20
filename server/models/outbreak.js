const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  disease: { type: String },
  city: { type: String },
  country: { type: String },
  latitude: { type: Number },
  longitude: { type: Number },
  status: { type: String },
  reportedDate: { type: Date },
  caseCount: { type: Number },
  newsLink: { type: String },
  newsTitle: { type: String },
  whoId: { type: String },
  analysis: { type: String },
});

module.exports = mongoose.model("Outbreak", schema);
