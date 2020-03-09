
class Work {
    constructor (id,title, description) {
        this._title = title
        this._description = description
    }

    get title () {
        return this._title
    }

    get description () {
        return this._description
    }

    serialize () {
        return {
            id: this.id,
            title: this.title,
            description: this.description
        }
    }

    toString () {
        return `Work Model
        title : ${this.title}
        description : ${this.description}`
    }
}

module.exports = { Work }
