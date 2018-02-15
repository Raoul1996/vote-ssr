// default config
module.exports = {
  KEYS: 'lost heart, lost soul',
  SITE_FILE: 'app/web/asset/images/favicon.ico',
  VUE_SSR: 'app/web/view/layout.html',
  LOGGER: {
    LEVEL: 'DEBUG',
    DIR: 'logs'
  },
  STATIC: {
    PREFIX: '/public/',
    DIR: 'public'
  },
  MIDDLEWARE: ['access',
    'errorHandler'],
  SECURITY: {
    CSRF: true
  },
  MYSQL: {
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
}
