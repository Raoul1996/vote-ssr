const Controller = require('egg').Controller

class UserController extends Controller {
  async index() {
    const {ctx} = this
    const {query: {userId}} = ctx
    const res = await ctx.service.user.find(userId)
    ctx.body = res
  }
}

module.exports = UserController