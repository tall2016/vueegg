'use strict';

/** @type Egg.EggPlugin */
module.exports = {
  // had enabled by egg
  // static: {
  //   enable: true,
  // }
  cros: {
    enable: true,
    package: 'egg-cors'
  },

  jwt: {
    enable:true,
    package: 'egg-jwt'
  },
  sequelize: {
    enable: true,
      package: 'egg-sequelize',
  },

};
