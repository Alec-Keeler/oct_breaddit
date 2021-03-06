'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    hashedPassword: DataTypes.STRING,
    faveBread: DataTypes.STRING
  }, {});
  User.associate = function(models) {
    // associations can be defined here
    User.hasMany(models.Post, {foreignKey: 'userId'})
    User.belongsToMany(models.Subbreaddit, {
      through: 'Subscription',
      foreignKey: 'userId',
      otherKey: 'subId'
    })
  };
  return User;
};