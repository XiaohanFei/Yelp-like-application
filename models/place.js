const db = require("../config/db.js");
const Sequelize = require("sequelize");
const Op = Sequelize.Op;

const create = async function (params) {
  const result = await db.place.create({
    name: params.name,
    category_id: params.category_id,
    latitude: params.latitude,
    longitude: params.longitude,
    description: params.description,
    customer_id: params.customer_id,
  });
  return result;
};

const update = async function (params) {
  const result = await db.place.update(
    {
      name: params.name,
      category_id: params.category_id,
      latitude: params.latitude,
      longitude: params.longitude,
      description: params.description,
    },
    {
      where: {
        id: params.place_id,
      },
    }
  );
  return result;
};

const del = async function (params) {
  const result = await db.place.destroy({
    where: {
      id: params.place_id,
    },
  });
  return result;
};

const getList = async function (params) {
  // const result = await db.place.findAll({
  //     where: {
  //         name: {[Op.like]: `${params.search_term || ''}`}
  //     },
  //     include: [{
  //         model: db.category,
  //         where: {
  //             category
  //         }
  //     }]
  // })
  const result = await db.place.findAll();
  return result;
};

exports.create = create;
exports.update = update;
exports.del = del;
exports.getList = getList;
