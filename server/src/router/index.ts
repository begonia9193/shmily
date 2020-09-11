import Router from 'koa-router'
import fs from 'fs'
import path from 'path'

import login from './login'
import user from './user'

const router = new Router()

router.use('/login', login.routes(), login.allowedMethods())
router.use('/user', user.routes(), user.allowedMethods())

export default router