import Router from 'koa-router'

const loginRouter = new Router()

loginRouter.post('/', async (ctx) => {
  ctx.body = 'login router'
})

export default loginRouter
