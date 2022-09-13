'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {
  // method: Get
  async index() {
    let {ctx} = this;
    try {
      let id = ctx.params.id;
      let userList = await ctx.service.userlist.getUserById(id);
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
      let {name, address,school,sex,tel,date} = ctx.request.body;
      let e_user = await ctx.service.userlist.getUserByName(name);
      if (!e_user) {
        console.log(ctx.request.body)
        let res = await ctx.service.userlist.createUser(ctx.request.body)
        
        if (res) {
          ctx.body = {
            msg: '用户添加成功',
            status: 200
          }
        } else {
          ctx.body = {
            msg: '用户添加失败',
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
        console.log(e)
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
      let res = await ctx.service.userlist.deleteUser(id);
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
    console.log(this)
    let { ctx } = this;
    try {
      let id = ctx.params.id;
      console.log(id)
      let newName = ctx.request.body.name;
      let res = await ctx.service.userlist.updateUser(id, ctx.request.body);
      console.log(res)
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
        console.log(e)
      ctx.body = {
        msg: '服务器异常',
        status: 502
      }
    }
  }
}

module.exports = UserController;