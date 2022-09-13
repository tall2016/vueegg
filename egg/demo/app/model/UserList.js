
  module.exports = (app) => {
    const { DataTypes } = app.Sequelize;
  
  
    const User = app.model.define('users', {
      id: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      name: {
        type: DataTypes.STRING(45),
        allowNull: true
      },
      address: {
        type: DataTypes.STRING(45),
        allowNull: true
      },
      tel: {
        type: DataTypes.STRING(45),
        allowNull: true
      },
      sex: {
        type: DataTypes.STRING(45),
        allowNull: true
      },
      school: {
        type: DataTypes.STRING(45),
        allowNull: true
      },
      date: {
        type: DataTypes.DATEONLY,
        allowNull: true
      }
    }, {
      
      tableName: 'users',
      timestamps: false,
      indexes: [
        {
          name: "PRIMARY",
          unique: true,
          using: "BTREE",
          fields: [
            { name: "id" },
          ]
        },
      ]
    });
    return User
  };
    