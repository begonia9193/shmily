const Router = require('koa-router')
const loginRouter = new Router({
  prefix: 'login'
})

loginRouter.post('/', async ctx => {
  ctx.body = 'login router'
})

module.exports = loginRouter.routes()
export {}