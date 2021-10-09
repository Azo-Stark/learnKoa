const User = require('../model/user.model')

class UserService {
    async createUser(user_name, password){
        // 插入数据
        const res = await User.create({
            user_name,
            password
        })
        // 将插入后的结果返回
        return res.dataValues
    }
}

module.exports = new UserService()