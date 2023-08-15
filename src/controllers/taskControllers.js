const taskModels = require('../models/taskModels')

const getAll = async (request, response) => {

    const tasks = await taskModels.getAll();

    return response.status(200).json(tasks);
};

module.exports = {
    getAll
};
