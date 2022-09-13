'use strict';

const Controller = require('egg').Controller;

class JwtController extends Controller {
  async register() {
    const { ctx } = this;
    
    try {
        //获取前端传过来的用户名和密码
        let user = ctx.request.body.user;
        let {username, password, group_id} = user;
        //判断用户名是否已存在
        let e_user = await ctx.service.user.getUserByName(username);
        //假如不存在，进行注册
        if(!e_user) {
            let res = await ctx.service.user.createUser(username, password, group_id);
            if(res) {
                ctx.body = {
                    msg: '用户注册成功',
                    status: 200
                }
            } else {
                ctx.body = {
                    msg: '用户注册失败',
                    status: 402
                }
            }
        } else {
            ctx.body = {
                msg: '用户已存在',
                status: 401 
            };
        }
    } catch(e) {
        ctx.body = {
            msg: '服务器异常',
            status: 501
        }
    }
  }

  async login() {
      const {ctx} = this;

      try {
        //获取前端传过来的用户名和密码，然后根据用户名判断是否存在用户，并判断密码是否正确
        let user = ctx.request.body.user;
        let e_user = await ctx.service.user.getUserByName(user.username);

        //如果正确  生成一个token并响应
        if(e_user.username && e_user.password === user.password) {
            let token =  this.app.jwt.sign({username: e_user.username}, this.app.config.jwt.secret);
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
      } catch(e) {
        ctx.body = {
            msg: '服务器异常',
            status: 501
        }
      }
  }

  async getMsg() {
      this.ctx.body = "hello world";
  }
}

module.exports = JwtController;
