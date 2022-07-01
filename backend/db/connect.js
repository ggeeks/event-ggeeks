const mongoose = require('mongoose');
require('dotenv').config()
const url = process.env.MONGODB_URL;

function dbconnect() {
    try {
        mongoose.connect(url);
        console.log("Database connected Successfully");
    } catch (err) {
        console.log("Database Not Connected");
    }   
}
module.exports = {dbconnect};