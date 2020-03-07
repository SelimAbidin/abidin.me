const router = require('express').Router()
// const { AuthError } = require('../errors/AuthError')

router.all('*', (_req, _res, next) => {
    next()
    // next(new AuthError())
})

module.exports = router
