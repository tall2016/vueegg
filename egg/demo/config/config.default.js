/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};
  config.cluster = {
    listen:{
      port:9000,
      path:'',
      hostname:'127.0.0.1'
    }
  }

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1661339716046_8501';

  // add your middleware config here
  config.middleware = [];

  config.security = {
    csrf: {
      enable:false,
      ignoreJSON: true
    },
    domainWhiteList: ['*']
  }

  config.cors = {
    origin:'*',
    allowMethods:'GET,HEAD,PUT,POST,DELETE,PATCH'
  }

  config.jwt = {
    secret: 'sfdafljdas'
  }
  config.multipart = {
    mode:'file',
    fileSize:'1mb',
    fileExtensions:['jpg','txt']
  }
  config.sequelize = {
    dialect: 'mysql',
    host: '127.0.0.1',
    port: 3306,
    database: 'egg',
    username: 'root', // 数据库用户名
    password: 'passpass', // 数据库密码
    timezone: '+08:00', // 设置时区
    define: {
      timestamps: false, // 自动写入时间戳 created_at updated_at
      paranoid: false, // 字段生成软删除时间戳 deleted_at
      underscored: false, // 全部驼峰命名格式化
    },
  };
  

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
   
  };

  return {
    ...config,
    ...userConfig,
  };
};
