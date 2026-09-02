# GitHub 上手指南(第 4 课)

目标:把 `lesson01.html` 推到 GitHub,拿到一个可访问的网页链接。

## 第一步:注册账号(一次性的)

1. 打开 https://github.com
2. 点 **Sign up**,用邮箱注册(用户名会出现在你的链接里,起个正经点的名字,比如 `xiaoming-dev`)

## 第二步:在 GitHub 建一个仓库

1. 登录后点右上角 **+** → **New repository**
2. 仓库名填:`my-first-page`(英文,别用中文)
3. 选 **Public**(公开)
4. **不要**勾选 "Add a README"(我们的本地已有文件,勾了会冲突)
5. 点 **Create repository**
6. 页面会显示一串命令,先别管,回到本地操作

## 第三步:本地把代码推上去

打开 VS Code 终端(Terminal → New Terminal),确认自己在 stage0 目录,然后:

```bash
git init
git add .
git commit -m "第1课作业:个人介绍页"
git branch -M main
git remote add origin https://github.com/你的用户名/my-first-page.git
git push -u origin main
```

> 推送时浏览器可能弹 GitHub 登录授权,同意即可。

## 第四步:开启网页托管(GitHub Pages)

1. 在 GitHub 打开你的仓库
2. **Settings → Pages**
3. Source 选 **Deploy from a branch**,分支选 **main**,目录选 **/ (root)**
4. 点 **Save**,等 1~2 分钟
5. 拿到链接,形如:`https://你的用户名.github.io/my-first-page/lesson01.html`

把这个链接发给老师,这就是你人生第一个上线了的网页 🎉

## 常见卡点

- 推送被拒提示认证失败:GitHub 现在不支持密码登录推送,按提示用浏览器授权即可
- 链接打开 404:等 1~2 分钟再刷新;确认文件名大小写完全一致(lesson01.html)
