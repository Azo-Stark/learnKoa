// 入口文件，服务模块
const { APP_PORT } = require('./config/config.default')

const app = require('./app')

app.listen(APP_PORT, () => {
    console.log(`服务启动${ APP_PORT }端口正在监听`)
})