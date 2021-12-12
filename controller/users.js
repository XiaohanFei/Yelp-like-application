const models = require("../models/user");

const login = async function (req, res) {
  const params = req.fields;
  const data = await models.signin(params);
  if (data) {
    req.session = Object.assign (
      req.session, {
      email: req.fields.email,
      customer_id: data.id
    }); 
    res.json({
      done: true,
      message: 'login success'
    })
  } else {
    res.json({
      done: false,
      message: 'login failed'
    });
  }
};

const signup = async function (req, res) {
  const params = req.fields;
  const data = await models.signup(params)
  if (data) {
    req.session = Object.assign (
      req.session, {
      email: req.fields.email,
      customer_id: data.id
    }); 
    res.json({
      done: true,
      message: "signup success"
    })
  } else {
    res.json({
      done: false,
      message: "email exist"
    })
  }
};

exports.login = login;
exports.signup = signup;
