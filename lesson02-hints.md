# 第 2 课作业 · 分级提示(按需取用)

> 原则:卡住 10 分钟再看下一级。每看一级,你的收获就少一点。

## 提示 1:从哪下手

1. 先把 lesson01 的内容原样复制进新的 `lesson02.html`
2. 在 `<head>` 里、`<title>` 之后,加一对 `<style>` 和 `</style>`
3. 所有 CSS 规则写在这对标签之间
4. 改完保存 → 浏览器刷新 → 看效果,改一步看一步

## 提示 2:<style> 块长什么样(只有框架,没有答案)

```html
<head>
  <meta charset="UTF-8">
  <title>...</title>
  <style>
    /* 你的 CSS 写在这里 */
    /* 格式:选择器 { 属性: 值; } */
  </style>
</head>
```

## 提示 3:每个要求对应什么属性(只说属性名)

| 作业要求 | 用到的属性 |
|----------|-----------|
| body 换背景色 | `background-color` |
| body 换字体 | `font-family` |
| 白色圆角卡片 | `.card` 里写 `background-color` + `border-radius` |
| 卡片水平居中 | `max-width` + `margin: 0 auto` |
| 卡片内容不贴边 | `padding` |
| 卡片和页面边缘留距离 | `margin` |
| h1 换颜色 | `color` |
| 段落行高 | `line-height` |
| 小标题左边框 | `border-left`(再配一点 `padding-left` 让字不贴线) |

## 提示 4:实在卡死

翻 `lesson02-example.html` 看完整写法,但看完之后:**关掉它,自己重新默写一遍**,才算数。
