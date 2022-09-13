//中间件是一个函数，在请求与响应之间执行
//在egg中定义中间件：在app目录下创建middleware目录，然后创建js文件

function checktoken() {
    return async function(ctx, next) {
        try {
            //利用中间件来校验token
            let token = ctx.request.header.authorization.split(' ')[1];
            console.log(token)
            let decode = ctx.app.jwt.verify(token, ctx.app.config.jwt.secret);
            if(decode.username) {
                //如果成功，跳转到控制器
                await next();
            } else {
                ctx.body = {
                    msg: "token验证失败",
                    status: 400
                }
            }
        } catch(e) {
            console.log(e,checkerror)

            ctx.body = {
                msg: "服务器异常",
                status: 501
            }
        }
    }
}

module.exports = checktoken;