const { IResponse } = require('./IResponse')

class WorkResponse extends IResponse {
    constructor () {
        super()
        this._pages = []
    }

    getHeaders () {
        return {}
    }

    addWork (work) {
        this._pages.push(work)
    }

    toFormat () {
        return {
            'text/html': `<ul>${this._pages.map(e => `<li>${e.title}</li>`).join('')}</ul>`,
            'application/json': { success: true, works: this._pages.map(el => el.serialize()) }
        }
    }
}

module.exports = { WorkResponse }
