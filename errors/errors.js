const INCORRECT_ID_ERROR_NAME = 'CastError';
const BAD_REQUEST_ERROR_NAME = 'ValidationError';

const BAD_REQUEST_ERROR_CODE = 400;
const SERVER_ERROR_CODE = 500;
const NOT_FOUND_ERROR_CODE = 404;

const INCORRECT_ID_ERROR_MSG = 'Передан несуществующий _id';
const BAD_REQUEST_ERROR_MSG = 'Переданы некорректные данные';
const SERVER_ERROR_MSG = 'Произошла ошибка сервера';

const showErrorStatus = (err, res) => {
  if (err.name === INCORRECT_ID_ERROR_NAME) {
    return res.status(BAD_REQUEST_ERROR_CODE).send({ message: INCORRECT_ID_ERROR_MSG });
  }

  if (err.name === BAD_REQUEST_ERROR_NAME) {
    return res.status(BAD_REQUEST_ERROR_CODE).send({ message: BAD_REQUEST_ERROR_MSG });
  }

  return res.status(SERVER_ERROR_CODE).send({ message: SERVER_ERROR_MSG });
};

const showNotFoundError = (res) => {
  res.status(NOT_FOUND_ERROR_CODE).send({ message: INCORRECT_ID_ERROR_MSG });
};

module.exports = {
  showErrorStatus,
  showNotFoundError,
};
