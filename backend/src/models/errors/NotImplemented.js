const { CustomError } = require('./CustomError')

class NotImplemented extends CustomError {
    constructor (message = 'Not Implemented Error') {
        super(message, '#401', 401, 3)
    }
}

module.exports = { NotImplemented }
