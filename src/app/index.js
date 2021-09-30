// 业务部分的抽离
const Koa = require('koa')
const koaBody = require('koa-body')
const app = new Koa()
app.use(koaBody())

const userRouter = require('../router/user.route')

app.use(userRouter.routes())

module.exports = app
