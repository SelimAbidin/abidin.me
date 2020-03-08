const router = require('express').Router()
const { IResponse } = require('../models/responses/IResponse')

function Responder (_req, res, next) {
    const { response } = res.locals
    if (response instanceof IResponse) {
        try {
            const formatObj = response.toFormat()
            const format = Object.entries(formatObj)
                .reduce((acc, [key, value]) => {
                    acc[key] = () => res.send(value)
                    return acc
                }, {})

            res.set(response.getHeaders())
                .status(200)
                .format(format)
        } catch (error) {
            next(error)
        }
    } else {
        next()
    }
}

router.all('*', Responder)

module.exports = router
