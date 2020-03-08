const { MongoClient } = require('mongodb')

// mongodb+srv://admin:<password>@abidin-me-7pqb5.mongodb.net/test?retryWrites=true&w=majority

const dbPass = encodeURIComponent(process.env.DB_PASS)
const connectionString = `mongodb+srv://${process.env.DB_USER}:${dbPass}@abidin-me-7pqb5.mongodb.net/test?retryWrites=true&w=majority`
const client = new MongoClient(connectionString, { useNewUrlParser: true, useUnifiedTopology: true })

client.connect()

// client.connect((err) => {
// // const _collection = client.db("test").collection("devices");
// // perform actions on the collection object
// // client.close();
// })
