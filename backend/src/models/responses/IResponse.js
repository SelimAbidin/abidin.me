const { NotImplemented } = require('../errors/NotImplemented')

function notImplemented () {
    throw new NotImplemented()
}

class IResponse { }

IResponse.prototype.toFormat = notImplemented
IResponse.prototype.isValid = notImplemented
IResponse.prototype.getHeaders = notImplemented

module.exports = {
    IResponse
}
