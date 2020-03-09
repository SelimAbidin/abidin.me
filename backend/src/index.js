if (process.env.DISABLE_DOT_ENV === undefined || process.env.DISABLE_DOT_ENV !== 'false') {
    const dotenv = require('dotenv')
    dotenv.config()
}
const express = require('express')
const helmet = require('helmet')
const app = express()
const { join } = require('path')
const AuthRouter = require('./routes/auth')
const WorksRouter = require('./routes/works')
const Responder = require('./routes/responder')
const { ErrorMiddleware } = require('./routes/error-middleware')
const { Postgres } = require('./db/postgres/index')
const { registerByKey } = require('./utils/provider')
const VERSION = 'v1'

registerByKey('database', new Postgres())

// securitry
app.use(helmet())

if (process.env.DEV === 'true') {
    app.use(function (req, res, next) {
        res.header('Access-Control-Allow-Origin', '*')
        next()
    })
}

app.use(`/rest/${VERSION}`, AuthRouter)
app.use(`/rest/${VERSION}`, WorksRouter)
app.use(`/rest/${VERSION}`, Responder)

/**
 * 404 handling page. Responses should be handled before this part
 */
app.all('*', (_req, res, next) => {
    res.status(404)
        .sendFile(join(__dirname, '/views/404/index.html'), (err) => {
            if (err) {
                next(err)
            }
        })
})

/**
 * Error middleware
 */
app.use(ErrorMiddleware)

app.listen(process.env.PORT, () => console.log(`Server started at ${process.env.PORT}`))
