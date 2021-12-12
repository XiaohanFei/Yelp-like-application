const db = require("../config/db.js");

const create = async function (params) {
  const result = await db.category.create({
    name: params.name,
  });
  return result;
};

const update = async function (params) {
  const result = await db.category.update(
    {
      name: params.name,
    },
    {
      where: {
        id: params.id,
      },
    }
  );
  return result;
};

const del = async function (params) {
  const result = await db.category.destroy({
    where: {
      id: params.id,
    },
  });
  return result;
};

exports.create = create
exports.update = update
exports.del = del