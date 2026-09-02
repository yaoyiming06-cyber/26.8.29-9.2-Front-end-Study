# CSS 速查卡(第 2 课)

## 核心语法

```css
选择器 {
  属性: 值;
}
```

## 三种写 CSS 的方式

| 方式 | 写法 | 什么时候用 |
|------|------|-----------|
| 内联 | `<p style="color:red">` | 临时改一处(少用) |
| 内部 | `<head>` 里放 `<style>...</style>` | 单个页面的小练习 |
| 外部 | `<link rel="stylesheet" href="style.css">` | 正式项目(推荐) |

## 选择器(怎么"选中"标签)

| 选择器 | 写法 | 特点 |
|--------|------|------|
| 标签 | `p { }` | 命中所有 `<p>` |
| class | `.card { }` + `class="card"` | **可复用**,最常用 |
| id | `#top { }` + `id="top"` | 全页唯一,少用 |

## 常用属性

| 属性 | 作用 | 例子 |
|------|------|------|
| `color` | 文字颜色 | `color: #1f6feb;` |
| `background-color` | 背景色 | `background-color: #fff;` |
| `font-size` | 字号 | `font-size: 18px;` |
| `font-family` | 字体 | `font-family: sans-serif;` |
| `text-align` | 文字对齐 | `text-align: center;` |
| `line-height` | 行高 | `line-height: 1.8;` |
| `width` / `max-width` | 宽度 / 最大宽度 | `max-width: 600px;` |
| `margin` | 外边距(盒子外) | `margin: 40px auto;` |
| `padding` | 内边距(盒子内) | `padding: 24px;` |
| `border-radius` | 圆角 | `border-radius: 12px;` |

## 盒模型(最重要的一张图)

```
        margin(外边距,盒子与别人之间的距离)
      ┌─────────────────────────┐
      │  border(边框)            │
      │  ┌───────────────────┐  │
      │  │  padding(内边距)   │  │
      │  │  ┌─────────────┐  │  │
      │  │  │  内容(content)│  │  │
      │  │  └─────────────┘  │  │
      │  └───────────────────┘  │
      └─────────────────────────┘
```

## 两个高频"居中"口诀

- 文字水平居中:`text-align: center;`
- 块级盒子水平居中:`max-width: 600px;` + `margin: 0 auto;`

## 颜色写法

- 单词:`red`、`white`
- 十六进制(最常用):`#1f6feb`、`#f5f7fa`
