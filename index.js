const express = require("express");
const bodyParser = require("body-parser");
const massive = require("massive");
require("dotenv").config();
const pc = require('./products_controller')

const app = express();
app.use(bodyParser.json());
const port = process.env.PORT || 3000;

massive(process.env.CONNECTION_STRING)
  .then(db => {
    app.set("dbInstance", db);
    app.listen(port, () => {
      console.log(`The Magic is happening on port ${port}.`);
    });
  })
  .catch(err => console.log(err));

  app.post('/api/product',pc.create)
  app.get('/api/products', pc.getAll)
  app.get('/api/product/:id', pc.getOne)
  app.put('/api/product/:id', pc.update)
  app.delete('/api/product/:id', pc.delete)


