const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const outbreaksRouter = require("./routes/outbreaks");
const mongoDB = require("mongoose");
const cron = require("node-cron");
const { fetchAndSaveOutbreaks } = require("./services/storageService.js");

const app = express();
dotenv.config();

app.use(cors());
app.use(express.json());
app.use("/api/outbreaks", outbreaksRouter);

mongoDB
  .connect(process.env.MONGO_URI)
  .then(() => {
    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });

    cron.schedule("0 11 * * *", fetchAndSaveOutbreaks);
    fetchAndSaveOutbreaks();
  })
  .catch((err) => {
    console.error(err);
  });
