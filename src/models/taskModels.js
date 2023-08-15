const connection = require('./connections')

const getAll = async () =>{

    const taskes = await connection.execute('select * from tasks.tasks')
    return taskes;
};

module.exports = {
    getAll
};