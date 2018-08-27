const express = require('express')
const path = require('path')
const app = express()
const port = 3000

app.set('views', `${__dirname}/views`)
app.set('view engine', 'pug')

app.use(express.static(`${__dirname}/public`))

app.get('/', (req, res) => {
    res.render('index')
})

app.get('/signin', (req, res) => {
    res.render('signin')
})

app.listen(port, () => {
    console.log(`server is running on localhost:${port}`)
})