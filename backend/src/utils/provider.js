
const map = new Map()

function registerByKey (key, type) {
    if (map.has(key)) {
        throw new Error(`"${key}" is already assigned.`)
    }
    map.set(key, type)
}

function getByKey (key) {
    if (!map.has(key)) {
        throw new Error(`"${key}" could not be found.`)
    }
    return map.get(key)
}

module.exports = {
    registerByKey,
    getByKey
}
