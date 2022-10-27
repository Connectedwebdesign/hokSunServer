var mongoose = require("mongoose");
var Schema = mongoose.Schema;

const coachSchema = new Schema(
  {
    lastName: {
      type: String,
      required: false,
    },
    firstName: {
        type: String,
        required: false,
      },
      type: {
        type: Array,
        required: false,
      },
      description: {
        type: String,
        required: false,
      },
      image: {
        type: Array,
        required: false,
      },
      price: {
        type: String,
        required: false,
      },
      discount: {
        type: String,
        required: false,
      },
  },
  { collection: "coach" }
);

const Coach = mongoose.model("Coach", coachSchema);

module.exports = Coach;
