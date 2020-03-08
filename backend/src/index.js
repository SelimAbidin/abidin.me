if (process.env.DISABLE_DOT_ENV === undefined || process.env.DISABLE_DOT_ENV !== 'false') {
    const dotenv = require('dotenv')
    dotenv.config()
}
const express = require('express')
const helmet = require('helmet')
const app = express()
const { join } = require('path')
const fse = require('fs-extra')
const AuthRouter = require('./routes/auth')
const PagesRouter = require('./routes/pages')
const Responder = require('./routes/responder')
const { ErrorMiddleware } = require('./routes/error-middleware')
require('./db/mongo/database')
const VERSION = 'v1'

// securitry
app.use(helmet())

app.use(`/rest/${VERSION}`, AuthRouter)
app.use(`/rest/${VERSION}`, PagesRouter)
app.use(`/rest/${VERSION}`, Responder)

/**
 * 404 handling page. Responses should be handled before this part
 */
app.all('*', (_req, res, next) => {
    fse.createReadStream(join(__dirname, '/views/404/index2.html'))
        .on('error', (err) => {
            next(err)
        })
        .pipe(res)
})

/**
 * Error middleware
 */
app.use(ErrorMiddleware)

app.listen(process.env.PORT, () => console.log(`Server started at ${process.env.PORT}`))
