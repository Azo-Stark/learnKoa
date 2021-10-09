const {DataTypes} = require('sequelize')
const seq = require('../db/seq')

// 创建模型
const User = seq.define('zd_users', {
    // id 会被自动创建
    user_name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        comment: '用户名，唯一'
    },
    password: {
        type: DataTypes.CHAR(6),
        allowNull: false,
        comment: '密码'
    },
    id_admin:{
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: 0,
        comment: '是否为管理员， 0：不是（默认），1： 是'
    }
}, {
    // 其他模型参数
    seq, // 需要连接的模型实例
    modelName: '', // 模型名称
});

User.sync({force: true})

module.exports = User