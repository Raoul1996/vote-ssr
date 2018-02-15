# egg-vue-ssr-spa

> [vue-vote](https://github.com/Raoul1996/vue-vote.git) AND [koa-vote](https://github.com/Raoul1996/koa-vote.git)  ssr(server side render) version

脚手架文档[在这里](OLDREADME.md)

## 技术栈
- Egg 版本： ^2.x.x
- Node 版本: Node ^8.x.x+
- Webpack 版本: ^3.8.1, 对应 `easywebpack-vue` 版本为 ^3.5.0
- Vue 版本: ^2.5.0

## 参考文章
- [Docker for Devs: Hot Module Reloading & Live Editing in Containers](http://www.summa.com/blog/docker-for-developers-hot-module-reloading-live-editing-in-containers)

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