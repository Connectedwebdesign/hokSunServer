const _ = require('lodash');
const async = require('async');

// const { itemPerPage } = Constant;

// const Account = mongooseReadOnly.model('account');
// const accountModel = reqlib('/db/models/account');
const Coach = require('../../../models/coachModel')

const orderByList = ['id'];
const orderList = ['asc', 'desc'];

const { itemPerPage } = require('../../../services/constant')

/**
 * get account list
 */
module.exports = (req, res) => {
  const asyncOptions = {
    query: _.reduce(
      ['order', 'orderBy', 'page', 'perPage', 'skip'],
      (map, qs) => {
        const val = _.get(req.query, qs, null);
        if (_.size(val) !== 0) {
          _.set(map, qs, val);
        }
        return map;
      },
      {
        page: 1,
        perPage: itemPerPage,
      },
    ),
    resultList: null,
  };

  async.waterfall([
    /**
     * validate and prepare query
     * modify: query
     */
    async.apply((options, cb) => {
      const { query } = options;

      if (_.indexOf(orderByList, query.orderBy) === -1) {
        query.orderBy = _.first(orderByList);
      }
      if (_.indexOf(orderList, query.order) === -1) {
        query.order = _.first(orderList);
      }


      query.page = query.page || 1;
      query.perPage = query.perPage || itemPerPage;

      if(query.page){
        query.skip = (query.page-1)*query.perPage
      }

      return cb(null, options);
    }, asyncOptions),
    /**
     * fetch list
     * fill: resultList
     * use: query, account
     */
     (options, cb) => {
      const { query, account } = options;
      Coach
        .find({})
        .then((list) => {
          const count = _.size(list)
          _.set(options, 'resultCount',count);
          return cb(null, options);
        })
        .catch(err => cb(err));
    },

    (options, cb) => {
      const { query, account } = options;
      Coach
        .find({})
        .sort({
          ['lastName']: 'asc',
        })
        .limit(_.toInteger(query.perPage))
        .skip(_.toInteger(query.skip))
        // .paginate()
        // .lean()
        .then((list) => {
          _.set(options, 'resultList',list);
          return cb(null, options);
        })
        .catch(err => cb(err));
    },
  ], (err, result) => {
    if (err) {
      return res.status(500).send(err);
    }
    return res
      .setHeader('x-pagination-total', result.resultCount)
      .set('Access-Control-Expose-Headers','x-pagination-total')
      .status(200)
      .send(result.resultList);
  });
};
