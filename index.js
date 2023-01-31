import express from 'express';
import { userRouter } from './users/users.js'

const port = 8000;
const app = express();

app.get('/hello', (req, res) => {
    res.send('Hi all')
})

app.use('/users', userRouter);

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`)
})