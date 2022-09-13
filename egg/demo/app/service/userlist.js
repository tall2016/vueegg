const Service = require('egg').Service;

class UserService extends Service {
  async getUserById(id) {
    let {app} = this;
    let userList = [];
    try {
      if(id) {
        userList = await app.model.UserList.findAll({
          where: {id}
        });
      } else {
        userList = await app.model.UserList.findAll();
      }

      return userList;
    } catch(e) {
      console.log(e)
      return null;
    }
  }
  

  async getUserByName(username) {
    let {app} = this;
    try {
      let user = await app.model.UserList.findAll({
        where: {username}
      });

      return user[0];
    } catch(e) {
      return null;
    }
  }

  async createUser(user) {
    let {app, ctx} = this;
    try {
      await app.model.UserList.create(user);

      return true;
    } catch(e) {
      return false;
    } 
  }

  async deleteUser(id) {
    let {app} = this;
    try {
      let res = await app.model.UserList.destroy({
        where: {id}
      });

      return true;
    } catch(e) {
      return false;
    }
  } 

  async updateUser(id, user) {
    let {app} = this;
    console.log(id,user)
    try {
      let res = await app.model.UserList.update(user, {
          where: {id}
        }
      );

      return true;
    } catch(e) {
      console.log(e)
      return false;
    }
  }


}

module.exports = UserService;
