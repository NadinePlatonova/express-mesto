const express = require('express');

const mongoose = require('mongoose');

const bodyParser = require('body-parser');

const usersRouter = require('./routes/users');

const { PORT = 3000 } = process.env;

const app = express();

mongoose.connect('mongodb://localhost:27017/mestodb', {
  useNewUrlParser: true,
  autoIndex: true,
});

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', usersRouter);

app.use((req, res, next) => {
  req.user = {
    _id: '61883b24ee9529a7858d9058',
  };

  next();
});

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
