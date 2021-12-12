var DataTypes = require("sequelize").DataTypes;
var _category = require("./category");
var _customer = require("./customer");
var _photo = require("./photo");
var _place = require("./place");
var _place_photo = require("./place_photo");
var _review = require("./review");
var _review_photo = require("./review_photo");

function initModels(sequelize) {
  var category = _category(sequelize, DataTypes);
  var customer = _customer(sequelize, DataTypes);
  var photo = _photo(sequelize, DataTypes);
  var place = _place(sequelize, DataTypes);
  var place_photo = _place_photo(sequelize, DataTypes);
  var review = _review(sequelize, DataTypes);
  var review_photo = _review_photo(sequelize, DataTypes);

  place.belongsTo(category, { as: "category", foreignKey: "category_id"});
  category.hasMany(place, { as: "places", foreignKey: "category_id"});
  place.belongsTo(customer, { as: "customer", foreignKey: "customer_id"});
  customer.hasMany(place, { as: "places", foreignKey: "customer_id"});
  review.belongsTo(customer, { as: "customer", foreignKey: "customer_id"});
  customer.hasMany(review, { as: "reviews", foreignKey: "customer_id"});
  place_photo.belongsTo(photo, { as: "photo", foreignKey: "photo_id"});
  photo.hasMany(place_photo, { as: "place_photos", foreignKey: "photo_id"});
  review_photo.belongsTo(photo, { as: "photo", foreignKey: "photo_id"});
  photo.hasMany(review_photo, { as: "review_photos", foreignKey: "photo_id"});
  place_photo.belongsTo(place, { as: "location", foreignKey: "location_id"});
  place.hasMany(place_photo, { as: "place_photos", foreignKey: "location_id"});
  review.belongsTo(place, { as: "location", foreignKey: "location_id"});
  place.hasMany(review, { as: "reviews", foreignKey: "location_id"});
  review_photo.belongsTo(review, { as: "review", foreignKey: "review_id"});
  review.hasMany(review_photo, { as: "review_photos", foreignKey: "review_id"});

  return {
    category,
    customer,
    photo,
    place,
    place_photo,
    review,
    review_photo,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
