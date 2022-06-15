import express from 'express';
import bodyParser from 'body-parser';
import routes from './routes/reserve.js';
// @ts-ignore
import db from '../dist/db/conn.js';

const app = express();
const port: number | string = process.env.PORT || 3000;

app.use(bodyParser.json())
app.use(routes);

db.connectToServer((err: Error) => {
    if (err) {
        console.error(err);
        process.exit();
    }
    app.listen(port, () => {
        console.log(`Server is up on port ${port}`);
    });
});