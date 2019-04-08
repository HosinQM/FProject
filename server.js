const express = require('express')
const exphdbs = require('express-handlebars')
const hbs = require('hbs')
// const path = require('path')
const app = express()
const port = 3000

const idols = require('./idols')
const users = require('./Database/users')

app.use('/idols', idols)
app.use('/users', users)

app.engine('.hbs', exphdbs({ defaultLayout: 'main', extname: '.hbs' }))
app.set('view engine', '.hbs')

app.use(express.static(`${__dirname}/public`))

hbs.registerPartials(__dirname + '/views/partials')

app.get('/', (req, res) => {
    res.render('home')
})

app.get('/signup', (req, res) => {
    res.render('signup')
})

app.get('/results', (req, res) => {
    res.render('results')
})

app.listen(port, () => {
    console.log(`server is running on localhost:${port}`)
})