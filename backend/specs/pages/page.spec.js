const request = require('supertest')
const express = require('express')
const assert = require('assert')
const PagesRouter = require('../../src/routes/pages')
const Responder = require('../../src/utils/Responder')

describe('Pages Router', function () {
    let app
    before(function () {
        app = express()
        app.use(PagesRouter)
        app.use(Responder)
    })

    it('should show html', function () {
        request(app)
            .get('/pages')
            .expect('Content-Type', /html/)
            .end(function (err, res) {
                if (err) throw err
                assert.strictEqual(typeof res.text, 'string')
            })
    })

    it('should show html', function () {
        request(app)
            .get('/pages')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .end(function (err, res) {
                if (err) throw err
                assert.strictEqual(typeof res.text, 'string')
            })
    })
})
