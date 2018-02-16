const path = require('path')
const fs = require('fs')
module.exports = app => {
  const exports = {}

  exports.siteFile = {
    '/favicon.ico': fs.readFileSync(path.join(app.baseDir, 'app/web/asset/images/favicon.ico'))
  }

  exports.view = {
    cache: false
  }

  exports.vuessr = {
    layout: path.join(app.baseDir, 'app/web/view/layout.html')
  }

  exports.logger = {
    consoleLevel: 'DEBUG',
    dir: path.join(app.baseDir, 'logs')
  }

  exports.static = {
    prefix: '/public/',
    dir: path.join(app.baseDir, '/public/')
  }

  exports.keys = app.name + 'lost heart, lost soul'
  exports.mysql = {
    // 单数据库信息配置
    client: {
      // host
      host: '127.0.0.1',
      // 端口号
      port: '3306',
      // 用户名
      user: 'root',
      // 密码
      password: 'root',
      // 数据库名
      database: 'vote'
    },
    // 是否加载到 app 上，默认开启
    app: true,
    // 是否加载到 agent 上，默认关闭
    agent: false
  }
  exports.middleware = ['access',
    'errorHandler']
  exports.errorHandler = {
    match: '/api'
  }
  exports.security = {
    csrf: {
      enable: true
    },
  }
  return exports
}
