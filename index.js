import express from 'express';

const port = 8000;
const app = express();

app.get('/hello', (req, res) => {
    res.send('Hi all')
})

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`)
})