const mongoose = require("mongoose");
require("dotenv").config();

const DB_URL = process.env.DB_URL || 8000;

module.exports = () => {
  return mongoose.connect(DB_URL);
};