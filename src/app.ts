import express, { Request, Response } from 'express';

const app = express();
const port = 3000;

app.use('/', (req: Request, res: Response) => {
    res.status(200).send('DeSmart Task');
});

app.listen(port, () => {
    console.log(`Server is up on port ${port}`);
});