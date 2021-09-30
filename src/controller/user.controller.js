const { createUser } = require("../service/user.service")

class UserController {
    // 注册
    async register(ctx,next) {
        // 获取数据
        console.log(ctx.request.body)
        const {user_name,password} = ctx.request.body
        // 操作数据库
        const res = await createUser()
        console.log(res)
        ctx.body = ctx.request.body
    }
    // 登录
    async login(ctx,next) {
        ctx.body = '登陆成功'
    }
}

module.exports = new UserController()