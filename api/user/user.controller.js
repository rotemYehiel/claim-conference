const userService = require('./user.service');

const login = async (request, response) => {
    userService.login(request.query).then(result => {
        response.status(200).json(result[0]);
    })
}

module.exports = {
    login
}