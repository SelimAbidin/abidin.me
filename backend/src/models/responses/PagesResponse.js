const { IResponse } = require('./IResponse')

class PagesResponse extends IResponse {
    constructor () {
        super()
        this._pages = []
    }

    getHeaders () {
        return {}
    }

    addPage (name, description, image) {
        this._pages.push({ name, description, image })
    }

    toFormat () {
        return {
            'text/html': `<ul>${this._pages.map(e => `<li>${e.name}</li>`).join('')}</ul>`,
            'application/json': { success: true, pages: this._pages }
        }
    }
}

module.exports = { PagesResponse }
