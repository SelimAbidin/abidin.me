if (process.env.DISABLE_DOT_ENV === undefined || process.env.DISABLE_DOT_ENV !== 'false') {
    const dotenv = require('dotenv')
    dotenv.config()
}
const express = require('express')
const app = express()
const { join } = require('path')
const AuthRouter = require('./routes/auth')
const PagesRouter = require('./routes/pages')
const { saveErrorLogs } = require('./utils/SaveLogs')
const Responder = require('./utils/Responder')
const VERSION = 'v1'

app.use(`/rest/${VERSION}`, AuthRouter)
app.use(`/rest/${VERSION}`, PagesRouter)
app.use(`/rest/${VERSION}`, Responder)

/**
 * 404 handling page. Responses should be handled before this part
 */
app.all('*', (_req, res) => {
    res.sendFile(join(__dirname, '/views/404/index.html'))
})

/**
 * Error middleware
 */
app.use(function (err, _req, res, _next) {
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
})

app.listen(process.env.PORT, () => console.log(`Server started at ${process.env.PORT}`))
