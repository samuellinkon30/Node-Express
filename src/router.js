const express = require('express')
const taskController =  require('./controllers/taskControllers')


const router = express.Router();
router.use(express.json())

router.get('/',(req,res)=>{
    taskController.getAll(res,res);
})

router.post('/create',(req,res)=>{
    taskController.creatTaskController(req,res);
})

module.exports = router;