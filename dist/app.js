import express from 'express';
const app = express();
const port = 3000;
app.use('/', (req, res) => {
    res.status(200).send('DeSmart Task');
});
app.listen(port, () => {
    console.log(`Server is up on port ${port}`);
});
