class CustomError extends Error {
    constructor (message, code, statusCode = 500, importance = 0) {
        super(message)
        this.code = code
        this.statusCode = statusCode
        this.importance = importance
    }
}

module.exports = {
    CustomError
}
