const express = require('express')
const app = express()
const router = express.Router()
const couch = require('./couchdb')

let users = {
    usersname: [],
    emails: []
}

let usersCouch = couch.use('users')
usersCouch.view('usersDesign', 'userInformation', (err, body) => {
    if (!err) {

        let data = body.rows

        for(i = 0; i < data.length; i++){
            users.usersname.push(data[i].key)
            users.emails.push(data[i].value.email)
        }
    }
})

router.get('/', (req, res) => {
    res.render('users', users)
})

// router.get('/:username', (req, res) => {})

module.exports = router