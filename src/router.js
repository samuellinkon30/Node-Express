const express = require('express')
const taskController =  require('./controllers/taskControllers')
const taskMiddleware = require('./middlewares/taskMiddleware');


const router = express.Router();
router.use(express.json())

router.get('/',(req,res)=>{
    taskController.getAll(res,res);
})

router.get('/task/:id',(req,res)=>{
    taskController.getById(req,res);
})

router.post('/create', taskMiddleware.validateBody, (req,res)=>{
    taskController.creatTaskController(req,res);
})

module.exports = router;