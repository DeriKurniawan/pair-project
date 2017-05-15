'use strict';
module.exports = function(sequelize, DataTypes) {
  var Car = sequelize.define('Car', {
    car_name: DataTypes.STRING,
    car_merk: DataTypes.STRING,
    color: DataTypes.STRING,
    isRent: DataTypes.BOOLEAN,
    price: DataTypes.INTEGER,
    user_name: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Car;
};