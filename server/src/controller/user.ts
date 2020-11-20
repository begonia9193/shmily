import { Context } from 'koa'
import { getManager } from 'typeorm'
import User from '@src/entity/user'

export default class UserController {
  public static async login(ctx: Context) {
    const userRepository = getManager().getRepository(User)
    const newUser = new User()
    newUser.name = 'begonia'
    newUser.email = 'windy9193@163.com'
    newUser.password = 'aaa1111'
    newUser.avatar = 'http://qiniu.begonia.cool/begonia_avatar.jpeg'
    const user = await userRepository.save(newUser)

    ctx.status = 200
    ctx.body = user
  }
}