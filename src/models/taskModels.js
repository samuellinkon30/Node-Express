const  Sequelize  = require('sequelize');
const sequelize =  require('./sequelize')

const tasks = sequelize.define('tasks', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    }, 
    task: {
        type: Sequelize.STRING,
        allowNull: false
    },
    status:{
        type: Sequelize.STRING,
        allowNull: false
    },
    data: {
        type: Sequelize.DATE,
    }
},
  {
    timestamps: false // Defina esta opção como false para desativar os campos createdAt e updatedAt
  })

const getAll = () =>{
    console.log(tasks.findAll());
    
    return tasks.findAll();
};

module.exports = {
    getAll
};