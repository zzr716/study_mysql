const Koa = require('koa')
const app = new Koa()
const path = require('path')
const config = require('./../config')
const routers = require('./routers/index')
const views = require('koa-views')
const koaStatic = require('koa-static')
app.use(koaStatic(path.join(__dirname, './../static')))
app.use(views(path.join(__dirname, './views'), {
    extension: 'ejs'
}))
app.use(routers.routes()).use(routers.allowedMethods())
// 架构目录
// routers 定义路由的集合 按功能模块
// controllers 控制器 接管用户一切需求以及调度model 信使 DataView
// models 定义schema 数据结构以及结束
// services 定义数据服务 数据会有各种操作 行为业务有关
// getAllReview getReviewByUserId API
// routers->controllers<->services<->models->views
app.listen(config.port)
console.log(`the server is start at port ${config.port}`)