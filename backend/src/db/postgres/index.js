const { Pool } = require('pg')
const { IDatabase } = require('../IDatabase')
const { Work } = require('../../models/db-models/Work')
/**
 * Postgresql data layer.
 * Handles connection pool via "pg" module.
 *
 * ***** Code structure ******
 * - don't handle any error here. Errors should be handled in a service controllers, maybe even in middlewares.
 * - for specific errors, you may return Error/CustomErrors. If it is really specific, please create an Error model inherited from CustomError in models/errors.
 * - get prefix is not a good defination for "fetching" data from DB. Use fetch instead.
 */
class Postgres extends IDatabase {
    constructor () {
        super()
        const dbParams = {
            host: process.env.DB_HOST,
            password: process.env.DB_PASS,
            user: process.env.DB_USER,
            port: process.env.DB_PORT,
            database: process.env.DB_DATABASE
        }
        this._pooler = new Pool(dbParams)
        this._pooler.on('error', (error) => {
            console.log(error)
        })
    }

    async getClient () {
        const client = await this._pooler.connect()
        return client
    }

    async fetchAllWorks () {
        const test = await this.getClient()
        const tbl = await test.query('SELECT id,title, description FROM portfolio_tbl')
        test.release()
        return tbl.rows.map(item => {
            return new Work(item.id, item.title, item.description)
        })
    }
}

module.exports = { Postgres }
