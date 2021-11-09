const User = require('../models/user');

const ErrorStatus = require('../errors/errors');

const getUsers = (req, res) => {
  User.find({})
    .then((users) => res.send(users))
    .catch((err) => ErrorStatus.showErrorStatus(err, res));
};

const getUser = (req, res) => {
  User.findById(req.params.userId)
    .then((user) => {
      if (!user) return ErrorStatus.showNotFoundError(res);

      return res.send(user);
    })
    .catch((err) => ErrorStatus.showErrorStatus(err, res));
};

const createUser = (req, res) => {
  const { name, about, avatar } = req.body;

  return User.create({ name, about, avatar })
    .then((user) => res.send(user))
    .catch((err) => ErrorStatus.showErrorStatus(err, res));
};

const updateUser = (req, res) => {
  const { name, about } = req.body;

  return User.findByIdAndUpdate(
    req.params.userId,
    { name, about },
    { new: true },
  )
    .then((user) => {
      if (!user) return ErrorStatus.showNotFoundError(res);

      return res.send(user);
    })
    .catch((err) => ErrorStatus.showErrorStatus(err, res));
};

const updateAvatar = (req, res) => {
  const avatar = req.body;

  return User.findByIdAndUpdate(
    req.params.userId,
    avatar,
    { new: true },
  )
    .then((user) => {
      if (!user) return ErrorStatus.showNotFoundError(res);

      return res.send(user);
    })
    .catch((err) => ErrorStatus.showErrorStatus(err, res));
};

module.exports = {
  getUsers,
  getUser,
  createUser,
  updateUser,
  updateAvatar,
};
