// src/index.js

const message = "Hello world";

console.log(message);
// src/index.js

import express from 'express';

const app = express();
const PORT = 8080;


app.get('/', (req, res) => {
  res.json({
    message: 'Hello world!',
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
