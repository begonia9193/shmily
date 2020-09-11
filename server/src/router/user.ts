import Router from 'koa-router'

const userRouter = new Router()

userRouter.post('/', async ctx => {
  ctx.body = 'user index'
})

export default userRouter