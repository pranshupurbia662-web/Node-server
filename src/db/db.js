const mongoose = require("mongoose")

async function connectDb(){

    await mongoose.connect("mongodb+srv://pranshu_db:pranshu123@nodejsbasic.grdchr2.mongodb.net/pp")

    console.log("connected to db")
}

module.exports = connectDb