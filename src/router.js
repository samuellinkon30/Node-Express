const express = require('express')
const taskController =  require('./controllers/taskControllers')


const router = express.Router();

router.get('/',(req,res)=>{
    taskController.getAll(res,res);
})

module.exports = router;