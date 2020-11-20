require('module-alias/register')
import Koa from 'koa'
import dotenv from 'dotenv'
import chalk from 'chalk'
import router from '@src/router'
import { createConnection } from 'typeorm'
import 'reflect-metadata'

dotenv.config() // 加载通用的环境变量
const EnvPath = process.argv[2] === 'dev' ? './dev.env' : './prod.env'
dotenv.config({ path: EnvPath }) // 根据环境加载环境变量
createConnection().then(() => {
  const app = new Koa()
  app.use(router.routes()).use(router.allowedMethods())
  const port = process.env.PORT || 8089

  app.listen(port, () => {
    console.log(chalk.green('this server is run at port: ' + port))
    console.log(chalk.green(`http://localhost:${port}`))
  })
}).catch(err => {
  console.log(chalk.red('TypeORM connect error', err))
})
