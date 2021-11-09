const express = require('express');

const mongoose = require('mongoose');

const helmet = require('helmet');

const bodyParser = require('body-parser');

const usersRouter = require('./routes/users');
const cardsRouter = require('./routes/cards');

const { PORT = 3000 } = process.env;

const app = express();

mongoose.connect('mongodb://localhost:27017/mestodb', {
  useNewUrlParser: true,
  autoIndex: true,
});

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

app.use((req, res, next) => {
  req.user = {
    _id: '61883b24ee9529a7858d9058',
  };

  next();
});

app.use(helmet());
app.use('/', usersRouter);
app.use('/', cardsRouter);
app.use((req, res) => {
  res.status(404).send({ message: 'Что-то пошло не так...' });
});

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
