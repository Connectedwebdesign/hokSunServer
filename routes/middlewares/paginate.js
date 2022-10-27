const context = require('express-http-context');
const _ = require('lodash');
const { itemPerPage } = require('../../services/constant');
module.exports = (req, res, next) => {
  context.set('pagination', {
    page: _.max([_.toInteger(_.get(req, 'query.page', 1)), 1]),
    perPage: _.max([_.toInteger(_.get(req, 'query.perPage', itemPerPage)), 1]),
  });

  res.send = _.wrap(res.send, (send, data) => {
    res.set(context.get('x-pagination'));
    send.apply(res, [data]);
  });

  next();
};
