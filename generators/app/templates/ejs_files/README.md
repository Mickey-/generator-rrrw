
# <%= product %>

- 面向用户： <%= users %>

<% if (mobileORpc == 'mobile') { %>
因为是移动端项目，整个应用基于[MSUI - Mobile 59Store UI](http://swallow.59store.net:2333/msui/docs/) 的组件模块包支持    
React 挂载节点div#root 会带有一个classname m-base-window,样式会依赖m-base

同时应用会引入Fastclick
<% } %>


## 目录结构

```src/```里含有一个TodoMVC的示例代码，```npm start```后在[http://localhost:5959/](http://localhost:5959/)可查看Demo    

```
src/
├── index.html
├── index.js
├── base.css        在normalize.css基础上，业务定制的基础样式
├── assets/         图片等静态资源，可直接放在assets，不用另建images之类的目录
├── actions/
├── components/     业务组件
├── constants/      统一导出一些必要的常量
├── containers/
├── middleware/     中间件(如果需要)
├── reducers/
└── store/
```

## 涉及技术栈 (RRRW)

- [x] [React](https://facebook.github.io/react/)
<% if (mobileORpc == 'mobile') { %>
- [x] __[MSUI - Mobile 59Store UI](http://swallow.59store.net:2333/msui/docs/)__
<% } %>
- [x] [Redux](https://github.com/reactjs/redux)
- [x] [React Router Redux](https://github.com/reactjs/react-router-redux)
- [x] [Webpack](https://webpack.github.io)
- [x] [Redux DevTools Extension](https://github.com/zalmoxisus/redux-devtools-extension)
- [x] [Babel](https://babeljs.io/)
- [x] [Autoprefixer](https://github.com/postcss/autoprefixer)
- [x] [PostCSS](https://github.com/postcss/postcss)
- [x] [CSS modules](https://github.com/outpunk/postcss-modules)
- [x] TodoMVC 示例
- [ ] 还有哪些你认为有价值的优化点？随时联系@半边

## 安装(如果还需要的话)

```
$ npm install
```

## Watch & Hot Module Replace

```
$ npm start
```

## 生产环境构建

```
$ npm run build
```

## 项目负责前端

<%= fe %>

## 项目合作角色

产品：<%= pd %>
后端：<%= rd %>
设计：<%= ue %>
