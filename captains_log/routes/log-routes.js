const express = require('express')
const router = express.Router()
 const {allLogs, newForm,createNew,singleLog,deleteLog,editForm,updateLog,seedStarterData,clearStarterData} = require('../controllers/log-controller')

 //index
 router.get('/', allLogs)
//get new form

router.get('/new', newForm)

//delete
router.delete('/:id',deleteLog)
//update
router.put('/:id',updateLog)

//create new log
router.post('/', createNew)

//edit
router.get('/:id/edit',editForm)


//to get seed data

router.get('/seed',seedStarterData)
//router clear
router.get('/clear',clearStarterData)
//show route
router.get('/:id', singleLog)

//router.post('/upload')




//delete a single log


module.exports = router