const express = require('express')
const path = require('path')
const app = express()
const port = 3000

const idols = require('./idols')
const users = require('./Database/users')

app.use('/idols', idols)
app.use('/users', users)

app.set('views', `${__dirname}/views`)
app.set('view engine', 'pug')

app.use(express.static(`${__dirname}/public`))


app.get('/', (req, res) => {
    res.render('index')
})

app.get('/signin', (req, res) => {
    res.render('signin')
})

app.get('/signup', (req, res) => {
    res.render('signup')
})

app.post('/verify', (req, res) => {
    res.render('verify')
})

app.listen(port, () => {
    console.log(`server is running on localhost:${port}`)
})