import express from 'express';

const app = express();
const port = 3000;

// Basic route
app.get('/', (req, res) => {
    res.send('Hello from Express!');
});

app.listen(port, () => {
    console.log(`Express server running at http://localhost:${port}`);
});