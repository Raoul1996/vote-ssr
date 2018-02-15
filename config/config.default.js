const path = require('path')
const fs = require('fs')
const {KEYS, SITE_FILE, LOGGER, VUE_SSR, STATIC, MIDDLEWARE, SECURITY, MYSQL, domainWhiteList} = require('./default')
module.exports = app => {
  const exports = {}

  exports.siteFile = {
    '/favicon.ico': fs.readFileSync(path.join(app.baseDir, SITE_FILE))
  }

  exports.view = {
    cache: false
  }

  exports.vuessr = {
    layout: path.join(app.baseDir, VUE_SSR)
  }

  exports.logger = {
    consoleLevel: LOGGER.LEVEL,
    dir: path.join(app.baseDir, LOGGER.DIR)
  }

  exports.static = {
    prefix: STATIC.PREFIX,
    dir: path.join(app.baseDir, STATIC.DIR)
  }

  exports.keys = KEYS
  exports.mysql = MYSQL
  exports.middleware = MIDDLEWARE
  exports.errorHandler = {
    match: '/api'
  }
  exports.security = {
    csrf: {
      enable: SECURITY.CSRF
    },
    methodnoallow: {
      enable: false
    },
    domainWhiteList
  }
  return exports
}
