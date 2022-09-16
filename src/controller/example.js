import express from 'express';

const ExampleController = express.Router();

// endpoint
ExampleController.get('/', (req, res) => {
  res.json({ hello: 'world' });
});

export default ExampleController;
