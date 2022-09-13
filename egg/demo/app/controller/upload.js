'use strict';

const Controller = require('egg').Controller;

class UploadController extends Controller {
  async post() {
    const { ctx } = this;
    let res = await ctx.service.fileupload.upload()
    ctx.body = res
  }
}

module.exports = UploadController;
