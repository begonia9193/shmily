const Koa = require('koa')
const dotenv = require('dotenv')

dotenv.config() // 加载通用的环境变量
const EnvPath = process.argv[2] === 'dev' ? './dev.env' : './prod.env'
dotenv.config({ path: EnvPath }) // 根据环境加载环境变量

const app = new Koa();
const dbPath = process.env.MONGODB_URL

module.exports = app
export {}