import React from 'react';
import express from 'express';
import {readFileSync} from 'fs'
import { renderToString } from 'react-dom/server'
import {ComponentApp} from '../client/component'

const app = new express();

app.use(express.static('dist'))

app.get('/', async (_req, res) => {
    const index = readFileSync('public/index.html', `utf-8`)
    const renderApp = renderToString(<ComponentApp />);
    res.send(index.replace('{{rendered}}', renderApp));
})

app.get('/servestatr', async (_req, res) => {
  res.send(`<h1>Server with Babel-node React app is working</h1>`);
});

app.listen(3000, () => {
    console.log('Server is listening')
})