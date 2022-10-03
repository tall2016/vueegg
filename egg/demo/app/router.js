'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
 // router.get('/api', controller.api.index);
  router.post('/login', controller.login.post);
  router.resources('userlist','/userlist', app.middleware.checktoken(),controller.userlist)
  router.post('upload','/upload', controller.upload.post);

};
