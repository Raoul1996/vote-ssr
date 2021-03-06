exports.static = true
exports.cors = {
  enable: true,
  package: 'egg-cors'
}
exports.vuessr = {
  enable: true,
  package: 'egg-view-vue-ssr'
}
exports.validate = {
  enable: true,
  package: 'egg-validate'
}
exports.mysql = {
  enable: true,
  package: 'egg-mysql'
}
exports.jwt = {
  enable: true,
  package: 'egg-jwt'
}
// exports.passport = {
//   enable: true,
//   package: 'egg-passport'
// }
//
// exports.passportGithub = {
//   enable: true,
//   package: 'egg-passport-github'
// }
exports.bizerror = {
  enable: true,
  package: 'egg-bizerror',
};