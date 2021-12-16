const httpStatus = require('http-status');

module.exports = {
  INVALID_ENTRIES: {
    status: httpStatus.BAD_REQUEST,
    message: 'Invalid entries. Try again.',
  },

  EMAIL_REGISTRED: {
    status: httpStatus.CONFLICT,
    message: 'Email or name already registered',
  },

  LOGIN_NOT_FILLED: {
    status: httpStatus.UNAUTHORIZED,
    message: 'All fields must be filled',
  },

  LOGIN_INCORRECT: {
    status: httpStatus.NOT_FOUND,
    message: 'Incorrect username or password',
  },

  MISSING_TOKEN: {
    status: httpStatus.UNAUTHORIZED,
    message: 'missing auth token',
  },

  JWT_MALFORMED: {
    status: httpStatus.UNAUTHORIZED,
    message: 'jwt malformed',
  },

  RECIPE_NOT_FOUND: {
    status: httpStatus.NOT_FOUND,
    message: 'recipe not found',
  },

  INCORRECT_FORMAT: {
    status: httpStatus.NOT_FOUND,
    message: 'Incorrect format',
  },

  UNAUTHORIZED_ENTRIES: {
    status: httpStatus.UNAUTHORIZED,
    message: 'Admin required',
  },
};
