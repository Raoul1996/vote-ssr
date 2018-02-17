'use strict'

module.exports = (app) => {
  console.log(app)
  const matchList = true
  return async function auth(ctx, next) {
    if (matchList) {
      const {authorization} = ctx.request.headers
      if (!authorization) {
        return
      }
      const token = authorization.slice(7)
      const vf = ctx.app.jwt.decode(token, ctx.app.config.jwt.secret)
      if (!vf) {
        ctx.body = {
          status: 403,
          success: false,
          errorMsg: 'token错误'
        }
        return
      }

      if (vf.exp < Date.now() / 1000) {
        ctx.body = {
          status: 403,
          success: false,
          errorMsg: 'token过期'
        }
        return
      }
      ctx.state.user = await ctx.service.user.find(vf.data)
      ctx.state.jwt = vf.data
    }
    await next()

  }
}