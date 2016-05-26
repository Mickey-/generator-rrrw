'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

module.exports = yeoman.Base.extend({
  initializing: function() {
    this.log.ok(this.templatePath('./'))
    this.log.ok(this.destinationPath())
  },

  prompting: function () {
    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to 59store rrrw generator, it builds with' + chalk.red('react,redux,react-redux-router,webpack,babel,es6,autoprefixer,hmr,css-module')'
    ));

    var prompts = [{
      type    : 'input',
      name    : 'product',
      message : '请输入项目仓库名称',
      default : this.env.cwd.split('/').pop() // Default 当前目录名
    }];

    return this.prompt(prompts).then(function (props) {
      this.props = props;
    }.bind(this));
  },

  writing: function () {
    this.fs.copyTpl(
      this.templatePath('package.json'),
      this.destinationPath(),
      this.props
    );
    this.directory(
      this.templatePath('client/'),
      this.destinationPath()
    );
    this.fs.copy(
      this.templatePath('webpack.config.js'),
      this.destinationPath('webpack.config.js')
    )
  },

  install: function () {
    this.npmInstall();
  }
});
