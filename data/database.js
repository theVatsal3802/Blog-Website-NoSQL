const mongodb = require('mongodb');

const MongoClient = mongodb.MongoClient;

let database;

async function connectToDB() {
    const client = await MongoClient.connect('mongodb://localhost:27017');
    database = client.db('blog');
}

function getDb() {
    if (!database) {
        throw { message: 'Database not cennected yet.' };
    }
    return database;
}

module.exports = {
    connect: connectToDB,
    getDb: getDb,
};