const db = require("../config/db.js");

const create = async function (params) {
  const result = await db.review.create({
    location_id: params.location_id,
    comment: params.comment,
    rating: params.rating,
    customer_id: params.customer_id
  });
  return result;
};

const update = async function (params) {
  const result = await db.review.update(
    {
      comment: params.comment,
      rating: params.rating,
    },
    {
      where: {
        id: params.review_id,
      },
    }
  );
  return result;
};

const del = async function (params) {
  const result = await db.review.destroy({
    where: {
      id: params.review_id,
    },
  });
  return result;
};

exports.create = create;
exports.update = update;
exports.del = del;
