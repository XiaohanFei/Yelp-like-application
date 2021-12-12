const db = require("../config/db.js");

const signup = async function (params) {
  const userInfo = await db.customer.findOne({
    where: {
      email: params.email,
    },
  });
  if (userInfo) return;
  const result = await db.customer.create({
    email: params.email,
    password: params.password,
  });
  return result;
};

const signin = async function (params) {
  const userInfo = await db.customer.findOne({
    where: {
      email: params.email,
    },
  });
  if (!userInfo) return;
  if (params.password == userInfo.password) {
    return userInfo;
  } else {
    return;
  }
};


exports.signup = signup;
exports.signin = signin;
