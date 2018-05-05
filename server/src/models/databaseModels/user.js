 module.exports = (sequelize, DataTypes) =>  {
  const User = sequelize.define('User', {
    
    name:{
      type: DataTypes.STRING,
      allowNull: false
    },

    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    password:{
      type: DataTypes.STRING,
      allowNull: false      
    }
  });

  User.associate = models => {
    // associations can be defined here
    User.belongsTo(models.UserType, {
      foreignKey: 'userTypeId',
      onDelete: 'CASCADE'
    });
    
    User.hasMany(models.Order, {
      foreignKey: 'userId',
      onDelete: 'CASCADE'
    });
  };
  return User;
};

