const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('database', 'username', 'password', {
    host: 'localhost',
    dialect: 'mysql'
  })

sequelize.authenticate().then( ()=> {
    console.log('Connection with database estabeled');
}).catch(()=>{
    console.log('Erro: Erro to connect with database estabelecid')
})

module.exports = sequelize;