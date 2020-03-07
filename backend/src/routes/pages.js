const app = require('express').Router()
const { PagesResponse } = require('../models/responses/PagesResponse')

app.get('/pages', function (req, res, next) {
    const response = new PagesResponse()
    response.addPage('Deneme1', 'Konfig', '2323')
    response.addPage('Deneme2', 'Konfig', '2323')
    response.addPage('Deneme3', 'Konfig', '2323')
    response.addPage('Deneme4', 'Konfig', '2323')
    res.locals.response = response
    next()
})

module.exports = app
