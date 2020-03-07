
const { AuthError } = require('../../../src/models/errors/AuthError')
const { CustomError } = require('../../../src/models/errors/CustomError')
const asserts = require('assert')

describe('AuthError', function () {
    it('should be implemented of CustomError', function () {
        const authError = new AuthError()
        asserts.ok(authError instanceof CustomError)
    })

    it('should have 401 statusCode', function () {
        const authError = new AuthError()
        asserts.ok(authError.statusCode, 401)
    })

    it('should be throwable', function () {
        asserts.throws(() => {
            throw new AuthError()
        })
    })

    it('contains message', function () {
        const message = 'THIS IS A TEST MESSAGE'
        try {
            throw new AuthError(message)
        } catch (error) {
            asserts.strictEqual(error.message, message)
        }
    })
})
