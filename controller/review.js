const models = require("../models/review");

const createreview = async function (req, res) {
  const params = Object.assign(req.fields, {
    customer_id: req.session.customer_id,
  });
  const data = await models.create(params);
  if (data != null) {
    res.json({
      done: true,
      data: data,
    });
  } else {
    res.json({
      done: false,
      message: "error in database",
    });
  }
};

const updatereview = async function (req, res) {
  const params = req.fields;
  const data = await models.update(params);
  if (data != null) {
    res.json({
      done: true,
      message: "success",
    });
  } else {
    res.json({
      done: false,
      message: "error in database",
    });
  }
};

const deletereview = async function (req, res) {
  const params = req.fields;
  const data = await models.del(params);
  if (data != null) {
    res.json({
      done: true,
      data: data,
    });
  } else {
    res.json({
      done: false,
      message: "error in database",
    });
  }
};

const getList = async function (req, res) {
  const params = req.fields;
  const data = await models.getList(params);
  if (data != null) {
    res.json({
      done: true,
      data: data,
    });
  } else {
    res.json({
      done: false,
      message: "error in database",
    });
  }
};

exports.getList = getList;
exports.createreview = createreview;
exports.updatereview = updatereview;
exports.deletereview = deletereview;
