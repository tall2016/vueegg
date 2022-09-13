module.exports = (app) => {
  const { DataTypes } = app.Sequelize;


  const Admin = app.model.define('admin', {
        id: {
          autoIncrement: true,
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true
        },
        username: {
          type: DataTypes.STRING(45),
          allowNull: true
        },
        password: {
          type: DataTypes.STRING(45),
          allowNull: true
        }
      }, {
        
        tableName: 'admin',
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
          {
            name: "id_UNIQUE",
            unique: true,
            using: "BTREE",
            fields: [
              { name: "id" },
            ]
          },
        ]
      });
      return Admin
    };
    