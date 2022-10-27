var mongoose = require("mongoose");
var Schema = mongoose.Schema;

const clientFeedbackSchema = new Schema(
  {
    description: {
      type: String,
      required: true,
    },
  },
  { collection: "clientFeedback" }
);

const ClientFeedback = mongoose.model("ClientFeedback", clientFeedbackSchema);

module.exports = ClientFeedback;
