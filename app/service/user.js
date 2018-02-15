module.exports = app => {
  return class UserService extends app.Service {
    // constructor(ctx) {
    //   super(ctx)
    // }

    async find(uid) {
      // 假如 我们拿到用户 id 从数据库获取用户详细信息
      const {id, email, name} = await app.mysql.get('users', {id: uid})
      return {id, email, name}
    }
  }
}