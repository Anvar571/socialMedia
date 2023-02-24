const mongoose = require("mongoose");

async function db_connect() {
    try {
        mongoose.connect(process.env.DB_URL).then(() => {
            console.log("connecting successfully");
        }).catch((err) => {
            console.log(err.message);
        })
    } catch (error) {
        console.log(error.message);
    }
}

module.exports = db_connect