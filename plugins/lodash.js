const _ = require('lodash');

_.mixin({
  isObjectId(input) {
    if (!input) {
      return false;
    }

    const val = input.toString ? input.toString() : input;

    if (!_.isString(val)) {
      return false;
    }

    const regex = /^[a-fA-F0-9]{24}$/;
    return _.size(val.match(regex)) > 0;
  },
  setPlain: (obj, key, val) => {
    // eslint-disable-next-line no-param-reassign
    obj[key] = val;
    return obj;
  },
});
