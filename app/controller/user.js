const Controller = require('egg').Controller

class UserController extends Controller {
  async index() {
    const {ctx} = this
    const userid = 27
    console.log(10086)
    const res = await ctx.service.user.find(userid)
    ctx.body = res
  }
}

module.exports = UserController