const express = require('express')

const app = new express();

app.get('/', (_req, res) => {
    res.send(
        `<h1>React app is working</h1>`
    )
})

app.get('/servestatr', (_req, res) => {
  res.send(`<h1>Server React app is working</h1>`);
});

app.listen(3000, () => {
    console.log('')
})