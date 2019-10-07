const express = require('express');

const PORT = 3000;

const app = express();

app.get('/', (req, res) => {
  res.send('Basic Node.js project');
});

app.listen(PORT, () => {
  console.log(`App listening on PORT: ${PORT}`)
});
