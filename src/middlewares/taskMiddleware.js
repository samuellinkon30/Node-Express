const validateBody = (request, response, next) => {
    const body =  request.body;

    if( Object.keys(body).length === 0 ){
        return response.status(400).json('Body is not be empty');
    }

    next();
}

module.exports = {
    validateBody
}