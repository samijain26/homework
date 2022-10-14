const logModel = require('../models/log-model')
const logSeed = require('../models/logSeed')

// @desc get all logs
// @router GET /logs
// @access public
const allLogs = (req, res) => {
  logModel.find({}, (error, foundLogs) => {
    if (error) {
      res.status(400).json({ error })
    } else {
      res.status(200)
      res.render('logs/Index', { logs: foundLogs })
    }
  })
//res.send("hi")
}

// desc get new form
// @route GET /logs/new
// @access public
const newForm = (req, res) => {
  res.render('logs/New')
}

// @desc creating new log in db
// @route POST /logs
// @access public
const createNew = (req, res) => {
  if (req.body.broken === 'on') {
    req.body.broken = true
  } else {
    req.body.broken = false
  }

  logModel.create(req.body, (error, createdLog) => {
    if (error) {
      res.status(400).json({ error })
    } else {
      res.status(200)
      res.redirect('/logs')
    }
  })
}
//get a single log and delete
const singleLog = (req, res) => {
  
    logModel.findById(req.params.id, (error,foundLog) =>{
        if (error) {
            res.status(400).json({ error })
          } else {
            res.status(200)
            res.render('logs/Show' , { log : foundLog})
          }

    })
}


const deleteLog = (req, res) => {
    logModel.findByIdAndDelete(req.params.id, (error,deletedLog) =>{
        if (error) {
            res.status(400).json({ error })
          } else {
            res.status(200)
            res.redirect('/logs')
          }

    })
}
//to delete a single log

const editForm = (req ,res) => {
    logModel.findById(req.params.id, (error,foundLog) =>{
        if (error) {
            res.status(400).json({ error })
          } else {
            res.status(200)
            res.render('logs/Edit' , { log : foundLog})
          }

    })
}

const updateLog = (req ,res) => {
  if (req.body.broken === 'on') {
    req.body.broken = true
  } else {
    req.body.broken = false
  }
  logModel.findByIdAndUpdate(req.params.id,req.body,(error,foundLog) =>{
      if (error) {
          res.status(400).json({ error })
        } else {
          res.status(200)
          res.redirect(`/logs/${req.params.id}`)
        }

  })
}
const seedStarterData = (req, res) => {
  // Delete all remaining documents (if there are any)
  logModel.deleteMany({}, (error, deletedLogs) => {
      if (error) {
          res.status(400).json(error)
      } else {
          //console.log('deleted data.')
          
          // Data has been successfully deleted
          // Now use seed data to repopulate the database
          logModel.create(logSeed, (err, createdLogs) => {
            console.log(logSeed)
              if (error) {
                  res.status(400).json(error)
              } else {
                  res.status(200).redirect('/logs')
              }
          })
      }
  })
}

const clearStarterData = (req, res) => {
  // Delete all remaining documents (if there are any)
  logModel.deleteMany({}, (error, deletedLogs) => {
      if (error) {
          res.status(400).json(error)
      } else {
        res.status(200).redirect('/logs')
              }
            })
  }


module.exports = {
  allLogs,
  newForm,
  createNew,
  singleLog,
  deleteLog,
  editForm ,
  updateLog,
  seedStarterData,
  clearStarterData
 
}