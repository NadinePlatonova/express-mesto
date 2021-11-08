const INCORRECT_ID_ERROR_NAME = 'CastError';
const BAD_REQUEST_ERROR_NAME = 'ValidationError';

const BAD_REQUEST_ERROR_CODE = 400;
const SERVER_ERROR_CODE = 500;
const NOT_FOUND_ERROR_CODE = 404;

const showErrorStatus = (err, res) => {
  if (err.name === INCORRECT_ID_ERROR_NAME) {
    return res.status(BAD_REQUEST_ERROR_CODE).send({ message: 'Передан несуществующий _id' });
  }

  if (err.name === BAD_REQUEST_ERROR_NAME) {
    return res.status(BAD_REQUEST_ERROR_CODE).send({ message: 'Переданы некорректные данные' });
  }

  return res.status(SERVER_ERROR_CODE).send({ message: 'Произошла ошибка сервера' });
};

const showNotFoundError = (res, msg) => {
  res.status(NOT_FOUND_ERROR_CODE).send({ message: msg });
};

module.exports = {
  showErrorStatus,
  showNotFoundError,
};
