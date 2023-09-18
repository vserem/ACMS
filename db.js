const { default: mongoose } = require("mongoose");

let db;

mongoose.connect("mongodb+srv://acms:iJ96LqwsH9xRWDB@cluster0.ho8xusg.mongodb.net/?retryWrites=true&w=majority ")
    .then(db => {
        db = db
        console.log("Database Connected")
    })
    .catch(err=>{
        throw err
    })


    module.exports = db