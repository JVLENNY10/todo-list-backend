import express from 'express';

const app = express();

app.get('/', (_req, res) => res.json({ message: 'Hello, Back-End' }));

app.listen(3333);
