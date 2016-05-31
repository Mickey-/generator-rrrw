'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');
var fs = require('fs');

module.exports = yeoman.Base.extend({
  initializing: function() {
    this.log(yosay(
      'Welcome to ' + chalk.cyan('59store rrrw generator') + ', it builds with ' + chalk.red('react,redux,react-redux-router,webpack,babel,es6,autoprefixer,hmr,css-module   ') + 'and so on'
    ));

  },

  prompting: function () {
    // Have Yeoman greet the user.
    var prompts = [{
      type    : 'input',
      name    : 'repo',
      message : '请输入Git仓库名称(不能有空格和大写字母)',
      default : this.env.cwd.split('/').pop() // Default 当前目录名
    }, {
      type    : 'input',
      name    : 'product',
      message : '请输入产品中文名称（如：店长PC Web后台系统）',
      default : '59store大前端'
    }, {
      type    : 'input',
      name    : 'users',
      message : '请输入面向的用户群（如：59store店长）',
      default : '学生消费者'
    }, {
      type    : 'input',
      name    : 'fe',
      message : '请输入项目负责前端的花名，多人用逗号隔开',
      default : '半边，换换，小巡'
    }, {
      type    : 'input',
      name    : 'rd',
      message : '请输入项目合作后端的花名，多人用逗号隔开',
      default : '凌云，沉思'
    }, {
      type    : 'input',
      name    : 'pd',
      message : '请输入项目合作产品的花名，多人用逗号隔开',
      default : '小易'
    }, {
      type    : 'input',
      name    : 'ue',
      message : '请输入项目合作设计师的花名，多人用逗号隔开',
      default : '雷欧'
    }];

    return this.prompt(prompts).then(function (props) {
      this.props = props;
    }.bind(this));
  },

  writing: function () {
    var compilePath = this.templatePath('ejs_files/'),
      files = fs.readdirSync(compilePath)

    for(var i = 0; i < files.length; i++) {
      this.fs.copyTpl(
        this.templatePath(compilePath),
        this.destinationPath(),
        this.props
      )
    }

    this.directory(
      this.templatePath('pure_files/'),
      this.destinationPath()
    );
  },

  install: function () {
    this.npmInstall();
    this.on('end', function(){
      this.log.ok('React工程初始化完成，你可以执行' + chalk.green(' npm start ') + '开启dev server 查看示例')
    })
  }
});
