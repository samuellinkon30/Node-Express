const taskModels = require('../models/taskModels')

const getAll = async (request, response) => {

    const tasks = await taskModels.getAll();

    return response.status(200).json(tasks);
};

const creatTaskController = async (request,response) => {

    const task = ({
        name: request.body.title,
        status: request.body.status,
    });

    const createTask = await taskModels.creatTask(task);

    return response.status(200).json({
        message: "Task Criada com sucesso"
    });

}

module.exports = {
    getAll,
    creatTaskController
};
