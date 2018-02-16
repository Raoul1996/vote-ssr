module.exports = app => {
  const {router, controller} = app
  const auth = app.middleware.auth()
  app.get('/user/:id', app.controller.user.index)
  // .get('/logout', app.controller.user.logout)
    .get('/captcha', app.controller.user.captcha)
    .get('/login', app.controller.user.login)
    .post('/login', app.controller.user.login)
    .get('/register', app.controller.user.register)
    .post('/register', app.controller.user.register)
    .post('/forget', app.controller.user.forget)
    .post('/send', app.controller.user.send)
    .post('/update/:type', app.controller.user.update)
    .get('/api/article/list', auth, app.controller.app.list)
    .get('/api/article/:id', app.controller.app.detail)
    .get('/*', app.controller.app.index)
  // app.passport.mount('github')
}
