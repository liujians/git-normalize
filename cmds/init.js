var shell = require('shelljs');
var path = require('path');
var fs = require('fs');
var chalk = require('chalk');
const editJsonFile = require('edit-json-file');
exports.command = ['init', 'i'];
exports.desc = '初始化';

exports.builder = yargs => {};

exports.handler = async argv => {
  let root = path.join(__dirname, '../');
  let file = editJsonFile(`${process.cwd()}/package.json`);
  let rootFile = editJsonFile(`${root}/package.json`);
  file.set('husky', rootFile.get('husky'));
  file.set('lint-staged', rootFile.get('lint-staged'));
  file.set('lint-staged', rootFile.get('lint-staged'));
  file.set('config', rootFile.get('config'));
  file.save();
  shell.cp('-R', root + 'scripts/', './');
  let task = [];
  if (!fs.existsSync('./.editorconfig')) {
    task.push(root + '.editorconfig');
  } else {
    shell.echo(chalk.red('已存在.editorconfig'));
  }
  if (!fs.existsSync('./commit.config.js')) {
    task.push(root + 'commit.config.js');
  } else {
    shell.echo(chalk.red('已存在commit.config.js'));
  }
  if (!fs.existsSync('./.commitlintrc.js')) {
    task.push(root + '.commitlintrc.js');
  } else {
    shell.echo(chalk.red('已存在.commitlintrc.js'));
  }
  if (!fs.existsSync('./.eslintignore')) {
    task.push(root + '.eslintignore');
  } else {
    shell.echo(chalk.red('已存在.eslintignore'));
  }
  if (!fs.existsSync('./.eslintrc.js')) {
    task.push(root + '.eslintrc.js');
  } else {
    shell.echo(chalk.red('已存在.eslintrc.js'));
  }
  if (!fs.existsSync('./.prettierignore')) {
    task.push(root + '.prettierignore');
  } else {
    shell.echo(chalk.red('已存在.prettierignore'));
  }
  if (!fs.existsSync('./.prettierrc')) {
    task.push(root + '.prettierrc');
  } else {
    shell.echo(chalk.red('已存在.prettierrc'));
  }
  if (!fs.existsSync('./.stylelintrc')) {
    task.push(root + '.stylelintrc');
  } else {
    shell.echo(chalk.red('已存在.stylelintrc'));
  }

  console.log('开始安装依赖');
  Object.keys(rootFile.get('devDependencies')).forEach(i => {
    shell.echo(chalk.yellow(`正在安装${i}`));
    shell.exec('yarn add -D ' + i);
  });
  task.forEach(i => {
    shell.cp(i, './');
  });
  shell.echo(chalk.green('初始化成功！'));
  shell.exit(1);
};
