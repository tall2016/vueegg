'use strict';

const Controller = require('egg').Controller;

class
  ApiController extends Controller {
  async index() {
    console.log(this)
    const { ctx } = this;
    ctx.body = 'hi, egg';
  }
  async post() {
    const { ctx } = this;

    try {
      //获取前端传过来的用户名和密码，然后根据用户名判断是否存在用户，并判断密码是否正确
      let user = ctx.request.body.user;
      let e_user = await ctx.service.admin.getUserByName(user.username);
      console.log(e_user,user)
      //如果正确  生成一个token并响应
      if (e_user.username === user.username && e_user.password === user.password) {
        let token = this.app.jwt.sign({ username: e_user.username }, this.app.config.jwt.secret);
        ctx.body = {
          token: token,
          status: 200
        }
      } else {
        ctx.body = {
          msg: '用户名或密码错误',
          status: 401
        };
      }
    } catch (e) {
      ctx.body = {
        msg: '服务器异常',
        status: 501
      }
    }
  }
}

module.exports = ApiController;
