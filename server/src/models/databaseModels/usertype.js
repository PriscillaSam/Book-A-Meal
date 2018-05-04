
module.exports = (sequelize, DataTypes) => {
  const UserType = sequelize.define('UserType', {
    
    name: DataTypes.STRING

  });
  
  UserType.associate = (models) => {
    // associations can be defined here
    UserType.hasMany(models.User, {
      foreignKey: 'userTypeId',
      onDelete: 'CASCADE'
    });
  };
  return UserType;
};