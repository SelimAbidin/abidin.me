const { saveErrorLogs } = require('../utils/SaveLogs')

function ErrorMiddleware (err, _req, res, _next) {
    if (err.importance === undefined || +process.env.LOG_LEVEL > err.importance) {
        saveErrorLogs(err)
    }
    const status = typeof err.code === 'number' ? err.code : 500
    res.status(status).format({
        'text/plain': function () {
            res.send(err.message)
        },
        'text/html': function () {
            res.send(`<h1>${err.message}</h1>`)
        },
        'application/json': function () {
            res.send({
                success: false,
                message: err.message
            })
        },
        default: function () {
            res.send(err.message)
        }
    })
}

module.exports = { ErrorMiddleware }
