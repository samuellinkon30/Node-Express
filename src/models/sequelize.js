
require('dotenv').config();
const Sequelize = require('sequelize');

const sequelize = new Sequelize(process.env.MYSQL_DATABSE, process.env.MYSQL_USER, process.env.MYSQL_PASS, {
    host: process.env.MYSQL_HOST,
    dialect: process.env.MYSQL_DIALECT,
  })

sequelize.authenticate().then( ()=> {
    console.log('Connection with database estabeled');
}).catch((e)=>{
    console.log(`${e}`)
})

module.exports = sequelize;
