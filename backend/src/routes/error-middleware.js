const { saveErrorLogs } = require('../utils/SaveLogs')
const { CustomError } = require('../models/errors/CustomError')

function ErrorMiddleware (err, _req, res, _next) {
    if (err.importance === undefined || +process.env.LOG_LEVEL > err.importance) {
        saveErrorLogs(err)
    }

    let message = 'An Error Occurred'
    let status = 500
    if (err instanceof CustomError) {
        status = typeof err.code === 'number' ? err.code : 500
        message = err.message
    }

    res.status(status).format({
        'text/plain': function () {
            res.send(message)
        },
        'text/html': function () {
            res.send(`<h1>${message}</h1>`)
        },
        'application/json': function () {
            res.send({
                success: false,
                message: message
            })
        },
        default: function () {
            res.send(message)
        }
    })
}

module.exports = { ErrorMiddleware }
