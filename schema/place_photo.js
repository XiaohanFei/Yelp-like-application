const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('place_photo', {
    location_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'place',
        key: 'id'
      }
    },
    photo_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'photo',
        key: 'id'
      }
    },
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    }
  }, {
    sequelize,
    tableName: 'place_photo',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "place_photo_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
