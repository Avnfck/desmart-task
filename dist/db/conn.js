import { MongoClient } from 'mongodb';

const uri = `${process.env.DB_URI_BEGIN}${encodeURIComponent(process.env.DB_ACCOUNT)}:${encodeURIComponent(process.env.DB_PASSWORD)}${process.env.DB_URI_END}`;
const client = new MongoClient(uri, {
    useNewUrlParser: true,
});

let dbConnection;
export default {
    connectToServer: (callback) => {
        client.connect((err, db) => {
            if (err || !db) {
                return callback(err);
            }

            dbConnection = db.db('DeSmart');
            console.log("Successfully connected to MongoDB.");

            return callback();
        });
    },

    getDb: () => {
        return dbConnection;
    }
};