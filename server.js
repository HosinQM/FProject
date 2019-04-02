const express = require('express')
const exphdbs = require('express-handlebars')
const path = require('path')
const app = express()
const port = 3000

const idols = require('./idols')
const users = require('./Database/users')

app.use('/idols', idols)
app.use('/users', users)

app.engine('.hbs', exphdbs({ defaultLayout: 'main', extname: '.hbs' }))
app.set('view engine', '.hbs')

app.use(express.static(`${__dirname}/public`))

app.get('/', (req, res) => {
    res.render('home')
})

app.listen(port, () => {
    console.log(`server is running on localhost:${port}`)
})