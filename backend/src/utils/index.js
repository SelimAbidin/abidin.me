const { NotImplemented } = require('../models/errors/NotImplemented')

function notImplemented () {
    throw new NotImplemented()
}

/**
 * Promise try catch wrapper.
 * you don't need to use try/catch or promise chain in order to catch errors.
 * basic usage const [error, result] = await noTryCatch(veryDangeriousPromise())
 * if Error is null, everytrhing's cool.
 * @param {Promise<T>} promise
 * @return {Promise<[Error, T]>}
 */
async function noTryCatch (promise) {
    return promise
        .then((result) => {
            if (result instanceof Error) {
                return [result, null]
            }
            return [null, result]
        })
        .catch((error) => {
            return [error, null]
        })
}

module.exports = {
    notImplemented,
    noTryCatch
}
