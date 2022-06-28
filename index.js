  const express = require('express');
const app = express();
const port = 3010;
const path = require('path');
const members = [
  {
    Id : 1,
name : 'string',
cost : 15.30 ,
description : 'string'   

  }
] 
app.use(express.static('static'));

app.get('/api/members', (req, res) => {
  res.json(members);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
