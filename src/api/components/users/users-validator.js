const Joi = require('joi');

module.exports = {
  createUser: {
    body: {
      name: Joi.string().min(1).max(100).required().label('Name'),
      email: Joi.string().email().required().label('Email'),
      password: Joi.string().min(6).max(32).required().label('Password'),
      confirm_password: Joi.string()
        .valid(Joi.ref('password'))
        .required()
        .label('Confirm Password')
        .messages({ 'any.only': 'Passwords do not match' }),
    },
  },

  updateUser: {
    body: {
      name: Joi.string().min(1).max(100).required().label('Name'),
      email: Joi.string().email().required().label('Email'),
    },
  },

  changePassword: {
    body: {
      email: Joi.string().email().required().label('Email'),
      oldPassword: Joi.string().min(6).required().label('Old Password'),
      newPassword: Joi.string().min(6).required().label('New Password'),
      confirmPassword: Joi.string()
        .required()
        .label('Confirm Password')
        .messages({ 'any.only': 'Passwords do not match' }),
    },
  },
};
