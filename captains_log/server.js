const express = require('express')
const app = express()
const colors = require('colors')
const dotenv = require('dotenv').config()
const mongoConfig = require('./config/db')
const methodOverride = require('method-override')
var fs = require('fs');
var path = require('path');
const multer = require('multer')

const PORT = process.env.PORT || 3000

// body parser middleware need this or req.body will be undefined
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(methodOverride('_method'))
// css middleware
app.use(express.static('public'))
app.use(express.static('image'))
// view engine setup
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())

// setup routes
app.use('/logs', require('./routes/log-routes'))


// // Step 5 - set up multer for storing uploaded files
// var storage = multer.diskStorage({
//     destination: (req, file, cb) => {
//         cb(null, 'uploads')
//     },
//     filename: (req, file, cb) => {
//         cb(null, file.fieldname + '-' + Date.now())
//     }
// });
  
//var upload = multer({ storage: storage });

app.listen(PORT, () => console.log(`listening on port: ${PORT}`))

mongoConfig()