'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {
  // method: Get
  async index() {
    let {ctx} = this;
    try {
      let id = ctx.params.id;
      let userList = await ctx.service.user.getUserById(id);
      if (userList.length !== 0) {
        ctx.body = {
          msg: '获取用户信息成功',
          status: 200,
          data: userList,
          len: userList.length
        }
      } else {
        ctx.body = {
          msg: '获取用户信息失败',
          status: 402
        }
      }
    } catch (e) {
      console.log(e)
      ctx.body = {
        msg: '服务器异常',
        status: 501
      }
    }
  }

  // method: Post
  // Url: http://127.0.0.1:7001/user
  // body: { username, password, group_id }
  async create() {
    let {ctx} = this;
    try {
      let {username, password, group_id} = ctx.request.body;
      let e_user = await ctx.service.user.getUserByName(username);
      if (!e_user) {
        let res = await ctx.service.user.createUser(username, password, group_id)
        if (res) {
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
          status: 402
        }
      }
    } catch (e) {
      ctx.body = {
        msg: '服务器异常',
        status: 501
      }
    }
  }

  // method: Delete
  // Url: http://127.0.0.1:7001/user/:id
  async destroy() {
    let {
      ctx
    } = this;
    try {
      let id = ctx.params.id;
      let res = await ctx.service.user.deleteUser(id);
      if (res) {
        ctx.body = {
          msg: '删除成功',
          status: 200
        }
      } else {
        ctx.body = {
          msg: '删除失败',
          status: 402
        }
      }
    } catch (e) {
      ctx.body = {
        msg: '服务器异常',
        status: 501
      }
    }
  }

  // method: Put
  // Url: http://127.0.0.1:7001/user/:id
  async update() {
    let {
      ctx
    } = this;
    try {
      let id = ctx.params.id;
      let newName = ctx.request.body.username;
      let res = await ctx.service.user.updateUser(id, newName);
      if (res) {
        ctx.body = {
          msg: '更新成功',
          status: 200
        }
      } else {
        ctx.body = {
          msg: '更新失败',
          status: 402
        }
      }
    } catch (e) {
      ctx.body = {
        msg: '服务器异常',
        status: 501
      }
    }
  }
}

module.exports = UserController;