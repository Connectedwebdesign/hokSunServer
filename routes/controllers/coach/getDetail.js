const _ = require("lodash");
const async = require("async");
const moment = require("moment");

const Coach = require("../../../models/coachModel");

/**
 * get Article by id
 */
module.exports = (req, res) => {
  const asyncOptions = {
    id: req.params.id,
    resultObj: null,
  };

  async.waterfall(
    [
      /**
       * validate and prepare query
       * use: query
       */
      async.apply((options, cb) => {
        // const { query } = options;
        // query: _.reduce(),
        return cb(null, options);
      }, asyncOptions),
      /**
       * fetch obj
       * fill: resultObj
       * use: id, query, account
       */
      (options, cb) => {
        const { id } = options;
        const coachId = id;
        Coach.findOne({ _id: coachId })
          .then((obj) => {
            if (!obj) {
              return cb(new AppError("no coach can be found", 404));
            }
            _.set(options, "resultObj", obj);
            return cb(null, options);
          })
          .catch((err) => cb(err));
      },
    ],
    (err, result) => {
      if (err) {
        return res.status(500).send(err);
      }
      return res.status(200).send(result.resultObj);
    }
  );
};
