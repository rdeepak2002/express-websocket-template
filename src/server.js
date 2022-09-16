import express from 'express';

const app = express();
const port = 8080;

app.get('/', (req, res) => {
  res.json({ hello: 'world' });
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});