const models = require("../models/place");

const createplace = async function (req, res) {
  const params = req.fields;
  const data = await models.create(params);
  if (data != null) {
    res.json({
      done: true,
      id: data.id,
      message: `${data.name} created`,
      //   data: data,
    });
  } else {
    res.json({
      done: false,
      id: null,
      message: "error in database",
    });
  }
};

const updateplace = async function (req, res) {
  const params = req.fields;
  const data = await models.update(params);
  if (data != null) {
    res.json({
      done: true,
      id: data.id
    });
  } else {
    res.json({
      done: false,
      message: "error in database",
    });
  }
};

const deleteplace = async function (req, res) {
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

const search = async function (req, res) {
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

exports.createplace = createplace;
exports.updateplace = updateplace;
exports.deleteplace = deleteplace;
exports.search = search;
