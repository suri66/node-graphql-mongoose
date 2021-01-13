const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const actorSchema = new Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    gender: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);
var Actor = mongoose.model('Actor', actorSchema);
module.exports = { Actor, actorSchema };
