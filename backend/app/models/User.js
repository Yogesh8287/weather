const mongoose = require("mongoose");
const Joi = require("joi");
const jwt = require("jsonwebtoken");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    phone: {
      type: Number,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const { privatekey, JWT_EXPIRES_IN } = process.env;
userSchema.methods.generateAuthToken = function () {
  const payload = {
    _id: this._id,
    name: this.name,
  };
  return jwt.sign(payload, privatekey, { expiresIn: JWT_EXPIRES_IN });
};

function userValidate(user) {
  const schema = Joi.object({
    name: Joi.string().min(4).trim(true).required(),
    email: Joi.string().email().required(),
    phone: Joi.number().required(),
    password: Joi.string().min(8).required(),
  });
  return schema.validate(user);
}

const User = mongoose.model("user", userSchema);

exports.User = User;
exports.validate = userValidate;
