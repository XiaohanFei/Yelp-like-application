const db = require("../config/db.js");

const create = async function (params) {
  const result = await db.photo.create({
    file: params.files
  });
  if (!params.location_id) {
      await db.review_photo.create({
        review_id: params.review_id,
        photo_id: result.id
      })
  } else {
    await db.place_photo.create({
        location_id: params.location_id,
        photo_id: result.id
      })
  }
  return result;
};

const update = async function (params) {
  const result = await db.photo.update(
    {
        file: params.files
    },
    {
      where: {
        id: params.photo_id,
      },
    }
  );
  return result;
};

const del = async function (params) {
  const result = await db.photo.destroy({
    where: {
        id: params.photo_id,
    },
  });
  return result;
};

exports.create = create
exports.update = update
exports.del = del