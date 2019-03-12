# git-normalize

liujians的git提交规范说明

使用husky + lint-staged + commitlint来做提交前检查

`commit.config.js`中有两套emoji，分别用于github和gitlab，默认gitlab，可以自行修改

需要手动在gitignore中忽略`.commitMessage`文件

`.commitMessage`中用于保存上次commit的message信息，防止报错的时候还要重新填写，会在填写时自动读取，不需要复制

步骤：

> yarn global add git-normalize
>
> git-normalize init

1. 初始化目录，如果缺少某些lint规则文件则copy过去
1. 安装husky等相关库到当前项目目录
1. 把命令信息配置到package.json中去

安装完毕使用规则:

> git add .
>
> yarn commit
>
> git push

具体文档:

[https://www.yuque.com/liujians/doc/nq0s4l#064a7cb3](https://www.yuque.com/liujians/doc/nq0s4l#064a7cb3)
