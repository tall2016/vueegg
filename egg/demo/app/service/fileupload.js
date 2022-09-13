const Service = require('egg').Service;
const fs = require('fs');

class fileUploadService extends Service {
  async upload() {
    const { ctx } = this;

    const files = ctx.request.files;
    const filePath = files[0].filepath.replace(/\\\\/g, '\/');
    const fileinfo = fs.readFileSync(filePath);
    const target = "D:\\vueelement\\egg\\demo\\upload\\filename.jpg";
    fs.writeFileSync(target, fileinfo)
    fs.unlinkSync(filePath)
    return {
      status:200
    }
    

    
    
  }
  





}

module.exports = fileUploadService;
