// import Schema & model
const { Schema, model } = require("mongoose");

// created Schema
const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
    maxlength: 50,
  },
  age: {
    type: Number,
    required: true,
  },
  weight: {
    type: Number,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// created model
const UserModel = model('User', UserSchema);

// export model
module.exports = UserModel;