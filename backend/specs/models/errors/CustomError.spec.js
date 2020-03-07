
const { CustomError } = require('../../../src/models/errors/CustomError')
const asserts = require('assert')

describe('AuthError', function () {
    it('should be implemented of native Error', function () {
        const error = new CustomError()
        asserts.ok(error instanceof Error)
    })

    it('should have 500 statusCode', function () {
        const error = new CustomError()
        asserts.ok(error.statusCode, 500)
    })

    it('should be throwable', function () {
        asserts.throws(() => {
            throw new CustomError()
        })
    })

    it('contains message', function () {
        const message = 'THIS IS A TEST MESSAGE'
        try {
            throw new CustomError(message)
        } catch (error) {
            asserts.strictEqual(error.message, message)
        }
    })
})
