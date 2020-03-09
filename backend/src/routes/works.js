const app = require('express').Router()
const { WorkResponse } = require('../models/responses/WorkResponse')
const { getByKey } = require('../utils/provider')

app.get('/works', async function (req, res, next) {

    const dataProvider = getByKey('database')
    const pages = await dataProvider.fetchAllWorks()
    const response = new WorkResponse()
    pages.forEach((work) => {
        response.addWork(work)
    })

    res.locals.response = response
    next()
})

module.exports = app
