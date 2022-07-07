import express from 'express';

const app = new express();

app.get('/', async (_req, res) => {
    res.send(
        `<h1>React app is working</h1>`
    )
})

app.get('/servestatr', async (_req, res) => {
  res.send(`<h1>Server with Babel-node React app is working</h1>`);
});

app.listen(3000, () => {
    console.log('Server is listening')
})