module.exports = (Sequelize, DataTypes) => {
  const User = Sequelize.define('User', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    display_name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    image: DataTypes.STRING,
  },
  { timestamps: false });

//   User.associate = (models) => {
//     User.hasMany(models.)
//   }

  return User;
};
