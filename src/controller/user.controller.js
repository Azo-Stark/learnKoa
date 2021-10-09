const { createUser } = require("../service/user.service")

class UserController {
    // 注册
    async register(ctx,next) {
        // 获取数据
        console.log(ctx.request.body)
        const {user_name,password} = ctx.request.body
        // 操作数据库
        const res = await createUser(user_name, password)
        console.log(res)
        // 返回的结果
        ctx.body = {
            code: 0,
            message: '用户注册成功',
            results: {
                id: res.id,
                user_name: res.user_name
            }
        }
    }
    // 登录
    async login(ctx,next) {
        ctx.body = '登陆成功'
    }
}

module.exports = new UserController()