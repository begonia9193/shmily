import Koa from 'koa'
import dotenv from 'dotenv'
import router from './router/index'
import mysql from 'mysql'
import chalk from 'chalk'

dotenv.config() // 加载通用的环境变量
const EnvPath = process.argv[2] === 'dev' ? './dev.env' : './prod.env'
dotenv.config({ path: EnvPath }) // 根据环境加载环境变量
mysql.createConnection({
  host: '119.23.202.18',
  user: 'root',
  password: 'root_begonia',
  database: 'shmily'
}).connect(err => {
  if (err) {
    console.log(chalk.red('mysql connect fail !', err))
  } else {
    console.log(chalk.green('mysql connect success !'))
  }
})


const app = new Koa();
// 注册路由
app.use(router.routes()).use(router.allowedMethods())

export default app