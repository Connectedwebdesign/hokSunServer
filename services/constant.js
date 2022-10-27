const _ = require('lodash');

const constant = {
  itemPerPage: 15,
  errorMsgMap: {
    invalidInput: 'invalidInput',
    notFound: 'notFound',
    notAuthorized: 'You are not authorized to access',
    dbError: 'dbError',
    tronicoError: 'tronicoError',
    invalidDate: 'invalid Date',
    loginIdDuplicated: 'Login Id has already be used',
    emailDuplicated: 'Email has already be used',
    phoneNoDuplicated: 'Phone has already be used',
  },
};

module.exports = constant;
