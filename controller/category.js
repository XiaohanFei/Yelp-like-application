const models = require("../models/category");

const createcategory = async function (req, res) {
  const params = req.fields;
  const data = await models.create(params);
  if (data != null) {
    res.json({
      done: true,
      message: 'success',
      data: data,
    });
  } else {
    res.json({
      done: false,
      message: "error in database",
    });
  }
};

const updatecategory = async function (req, res) {
  const params = req.fields;
  const data = await models.update(params);
  if (data != null) {
    res.json({
      done: true,
      data: data,
      message: "success",
    });
  } else {
    res.json({
      done: false,
      message: "error in database",
    });
  }
};

const deletecategory = async function (req, res) {
  const params = req.fields;
  const data = await models.del(params);
  if (data != null) {
    res.json({
      done: true,
      data: data,
      message: 'success'
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
exports.createcategory = createcategory;
exports.updatecategory = updatecategory;
exports.deletecategory = deletecategory;
