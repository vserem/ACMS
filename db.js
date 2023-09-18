const { default: mongoose } = require("mongoose");

let db;

mongoose.connect("mongodb://127.0.0.1:27017/ACMS")
    .then(db => {
        db = db
        console.log("Database Connected")
    })
    .catch(err=>{
        throw err
    })


    module.exports = db