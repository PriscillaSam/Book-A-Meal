
export default function (sequelize, DataTypes) {
  const UserType = sequelize.define('UserType', {
    name: DataTypes.STRING
  }, {});
  
  UserType.associate = (models) => {
    // associations can be defined here
  };
  return UserType;
}