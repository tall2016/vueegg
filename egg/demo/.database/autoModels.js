'use strict';

const SequelizeAuto = require('sequelize-auto');
const devConfig = require('../config/config.dev.js')({name:'demo'});
const config = require('../config/config.default.js')({name:'demo'});
console.log(config);
const db = {
  database: devConfig.sequelize.database || config.sequelize.database,
  host: devConfig.sequelize.host || config.sequelize.host,
  port: devConfig.sequelize.port || config.sequelize.port,
  username: devConfig.sequelize.username || config.sequelize.username,
  password: devConfig.sequelize.password || config.sequelize.password,
  dialect: devConfig.sequelize.dialect || config.sequelize.dialect,
};
 console.log(db)
const auto = new SequelizeAuto(db.database, db.username, db.password, {
  host: db.host,
  dialect: db.dialect,
  directory: './.database/models/', // prevents the program from writing to disk
  port: db.port,
  additional: {
    timestamps: true,
  },
  // tables: []  // 指定表格
  // ...
});

auto.run(function(err) {
  if (err) throw err;

  console.log(auto.tables); // table list
  console.log(auto.foreignKeys); // foreign key list
});