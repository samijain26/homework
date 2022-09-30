const express = require('express')
const app = express()
const colors = require('colors')
const dotenv = require('dotenv').config()
const mongoConfig = require('./config/db')
const methodOverride = require('method-override')

const PORT = process.env.PORT || 3000

// body parser middleware need this or req.body will be undefined
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(methodOverride('_method'))
// css middleware
app.use(express.static('public'))

// view engine setup
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())

// setup routes
app.use('/logs', require('./routes/log-routes'))

app.listen(PORT, () => console.log(`listening on port: ${PORT}`))

mongoConfig()