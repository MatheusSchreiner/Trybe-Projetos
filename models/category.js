module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define('Category', {
    name: DataTypes.STRING,
  }, { timestamps: false });
  Category.associate = (models) => {
    Category.hasMany(models.PostsCategory, { foreignKey: 'categoryId', as: 'category' });
  };
  return Category;
};
