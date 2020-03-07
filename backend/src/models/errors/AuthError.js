const { CustomError } = require('./CustomError')

class AuthError extends CustomError {
    constructor (message = 'Authotantication Error') {
        super(message, '#401', 401, 5)
    }
}

module.exports = { AuthError }
