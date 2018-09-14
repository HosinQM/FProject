const express = require('express')
const router = express.Router()
const fs = require('fs')
const idols = require('./public/database/idols')

router.get('/', (req, res) => {
    res.json(idols)
})

router.get('/:name', (req, res) => {
    if (req.params.name == idols.filter((idol) => {
            if (idol.name == req.params.name) {
                res.render('idols')
                return true;
            }
        })) {} else {
        res.json({
            message: "Not Found"
        })
    }
})

module.exports = router