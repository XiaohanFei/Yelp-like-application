const models = require("../models/photo");

const createphoto = async function (req, res) {
  const params = Object.assign(req.fields, req.files);
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

const updatephoto = async function (req, res) {
  const params = Object.assign(req.fields, req.files);
  const data = await models.update(params);
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

const deletephoto = async function (req, res) {
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
exports.createphoto = createphoto;
exports.updatephoto = updatephoto;
exports.deletephoto = deletephoto;
