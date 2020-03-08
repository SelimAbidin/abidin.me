if (process.env.DISABLE_DOT_ENV === undefined || process.env.DISABLE_DOT_ENV !== 'false') {
    const dotenv = require('dotenv')
    dotenv.config()
}
const express = require('express')
const app = express()
const { join } = require('path')
const AuthRouter = require('./routes/auth')
const PagesRouter = require('./routes/pages')
const Responder = require('./routes/responder')
const { ErrorMiddleware } = require('./routes/error-middleware')
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
app.use(ErrorMiddleware)

app.listen(process.env.PORT, () => console.log(`Server started at ${process.env.PORT}`))
