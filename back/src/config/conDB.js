require("dotenv").config();
const mongoose = require("mongoose");

const conDB = async () => {
    console.log(process.env.MONGO_URI);
};

module.exports = conDB;