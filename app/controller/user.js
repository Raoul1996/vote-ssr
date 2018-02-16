const fs = require('fs')
const cert = fs.readFileSync(__dirname + '/../../id_rsa.enc')
module.exports = app => {
  class UserController extends app.Controller {
    async index() {
      const {ctx} = this
      const {params: {id}} = ctx
      const res = await ctx.service.user.find(id)
      ctx.body = res
    }

    async login() {
      // 创建 token
      console.log(233902434902)
      console.log(this.ctx.state)
      const token = app.jwt.sign({
        data: 'userId',
        exp: app.config.jwt.exp
      }, app.config.jwt.secret)
      this.ctx.body = token
    }

    async register() {
      this.ctx.body = {test: 'mock'}
    }

    async forget() {
      this.ctx.body = {test: 'mock'}
    }

    async update() {
      this.ctx.body = {test: 'mock'}
    }

    async send() {
      this.ctx.body = {test: 'mock'}
    }

    async captcha() {
      this.ctx.body = {test: 'mock'}
    }
  }

  return UserController
}