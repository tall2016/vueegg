const Service = require('egg').Service;

class UserService extends Service {
  async getUserById(id) {
    let {app} = this;
    let userList = [];
    try {
      if(id) {
        userList = await app.model.Admin.findAll({
          where: {id}
        });
      } else {
        userList = await app.model.Admin.findAll();
      }

      return userList;
    } catch(e) {
      return null;
    }
  }

  async getUserByName(username) {
    let {app} = this;
    console.log(app.model.Admin)
    try {
      let user = await app.model.Admin.findAll({
        where: {username}
      });

      return user[0];
    } catch(e) {
      console.log(e)
      return null;
    }
  }

  async createUser(username, password, group_id) {
    let {app, ctx} = this;
    try {
      await app.model.Admin.create({
        username,
        password,
        group_id
      });

      return true;
    } catch(e) {
      return false;
    } 
  }

  async deleteUser(id) {
    let {app} = this;
    try {
      let res = await app.model.Admin.destroy({
        where: {id}
      });

      return true;
    } catch(e) {
      return false;
    }
  } 

  async updateUser(id, newName) {
    let {app} = this;
    try {
      let res = await app.model.Admin.update({username: newName}, {
          where: {id}
        }
      );

      return true;
    } catch(e) {
      return false;
    }
  }


}

module.exports = UserService;
