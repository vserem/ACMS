var express = require('express');
const Resident = require('../models/resident');
var router = express.Router();

/* GET residents listing. */
router.get('/', async function (req, res, next) {
    try {
        const residents = await Resident.find()
        res.json(residents)
    } catch (error) {
        res.status(500).json({ "error": err })
    }
});

/* POST add new resident. */
router.post('/', async function (req, res, next) {
    var body = req.body
    try {
        const result = await Resident.create(body)
        return res.status(201).json(result)
    } catch (err) {
        if (err.errors){
            return res.status(400).json({"error":"Provide all the required fields"})
        }
        console.log(error);
        return res.sendStatus(500)
    }
});

module.exports = router;