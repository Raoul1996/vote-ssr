# egg-vue-ssr-spa

> [vue-vote](https://github.com/Raoul1996/vue-vote.git) AND [koa-vote](https://github.com/Raoul1996/koa-vote.git)  ssr(server side render) version

脚手架文档[在这里](OLDREADME.md)

## 技术栈
- Egg 版本： ^2.x.x
- Node 版本: Node ^8.x.x+
- Webpack 版本: ^3.8.1, 对应 `easywebpack-vue` 版本为 ^3.5.0
- Vue 版本: ^2.5.0
## 关键词
- ssr：vue 服务端渲染
- jwt：基于 egg-jwt 的 JSON web token 的使用
- axios： 基于 axios 的二次封装，集中处理
- dockerize：使用 docker 进行打包
- travis-ci：使用 travis-ci 进行自动化部署
- pm2：使用 pm2 进行服务托管
## 参考文章（文档是第一位的资料）
- Egg 文档
- EasyWebpack 文档
- 使用到的各种插件的文档
- [Docker for Devs: Hot Module Reloading & Live Editing in Containers](http://www.summa.com/blog/docker-for-developers-hot-module-reloading-live-editing-in-containers)
- [[译] Angular 安全 —— 使用 JSON 网络令牌（JWT）的身份认证：完全指南](https://juejin.im/post/5a64267c518825734e3e5c22)
## 踩坑日志

#### 20171230 配置 travis-ci、项目初次尝试
- egg 在编译的时候需要 `.eslintrc` 配置文件，所以部署到服务器的时候需要将项目中的隐藏文件一起打包,解决方法见 [.travis.yml](.travis.yml) 中这个部分：

   ```
    # 压缩，为上传准备
    # 因为 egg 进行编译的时候会需要 ESLint 的配置文件，所以隐藏文件需要打包
    - tar -jcf votes.tar.bz2 * .*
    ```
- 在创建新的 router 之后，需要重启服务
- [关闭安全威胁csrf防范？](https://github.com/eggjs/egg/issues/509)，这个设置极其不安全
- 配置数据库是在 config 下面的 plugin 中开启，在 config/config.${env}.js 配置各个环境的数据库连接信息

## 开发日志

### 20170215
- vue template 使用 pug（jade）
- 使用 mysql 数据库
- 配置 Dockerizing
- 配置 travis-ci
- 配置 pm2.json
- **新年快乐**

### 20170216
- egg 跨域问题解决办法
    1. 在 [plugin.js](config/plugin.js) 中开启 `egg-cors` 插件
    2. 在 `config.${env}.js` 中配置白名单，注意域名不需要添加 http && https 前缀
    3. 有关跨域和同源策略的文章网上多的去了
- ~~egg-jwt 插件的初步使用~~
    1. 参考项目：[eggjs-demo](https://github.com/glh1991/eggjs-demo)
    2. 参考之前我做的 jwt 校验的项目 [koa-vote](https://github.com/Raoul1996/koa-vote.git)
    2. jwt 校验的基础知识和好处网上同样一大堆，这里可以贴一下之前我翻译的一篇文章：[[译] Angular 安全 —— 使用 JSON 网络令牌（JWT）的身份认证：完全指南](https://juejin.im/post/5a64267c518825734e3e5c22)，虽然是 Angular + Express，但是关于 JWT 的知识是通用的
    3. 在 [plugin.js](config/plugin.js) 中开启 `egg-jwt` 插件或者其它插件， egg 玩的人不是特别多，所以很多问题可以强迫自己通过看文档啥的自己解决，而且官方给的文档和 demo 都很用心，很棒
    4. 目前是自己在 middleware 中放了一个[中间件](middleware/auth.js)
    5. 尝试将 [auth](middleware/auth.js) 中间件放到 `config.${env}.js` 中，但是在中间件抛出异常之后会影响 vue-ssr 的正常进行，所以暂时没有全局应用，在后期的实现中会增加 match 和 ignore 的配置
    6. 将 jwt 解密之后的内容挂载到 `ctx.state.user` 上，方便对用户进行标识，思路源于 koa-jwt 的实现
    7. 一定不要使用 jwt 存放敏感信息，原因可以查看我翻译的文章
- 使用 egg-jwt 文档中指定的方式进行使用
- 没思路的时候，可以看看 koa 是如何实现的，或许可以启发思路
### 20170217
- 目前项目脚手架构建速度过低，资料并不是很多，所以暂缓本项目开发，专注使用 koa -> egg
- 目前实现的部分基本也在 egg 上。