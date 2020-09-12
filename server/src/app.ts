import Koa from 'koa'
import dotenv from 'dotenv'
import router from './router/index'

dotenv.config() // 加载通用的环境变量
const EnvPath = process.argv[2] === 'dev' ? './dev.env' : './prod.env'
dotenv.config({ path: EnvPath }) // 根据环境加载环境变量

const dbPath = process.env.MONGODB_URL
const app = new Koa();
// 注册路由
app.use(router.routes()).use(router.allowedMethods())

export default app