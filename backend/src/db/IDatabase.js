const { notImplemented } = require('../utils')

/**
 * Abstract interface/class
 */
class IDatabase {}

/**
 *
 */
IDatabase.prototype.getConnection = notImplemented

module.exports = { IDatabase }
