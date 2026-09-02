# 第 2 课自查测验(CSS)

先不看任何资料,默答。答不出说明没掌握,回去看 `cheatsheet-css.md`。

1. CSS 的核心语法格式是什么?(选择器、属性、值怎么组合)
2. 想把所有 `<h1>` 变蓝色,选择器怎么写?想让"某几个特定段落"变灰色呢?
3. `margin` 和 `padding` 的区别是什么?
4. 让一个固定宽度的盒子在页面里水平居中,两个属性怎么搭配?
5. 想让文字水平居中,用什么属性?
6. 想给盒子加圆角,用什么属性?

---

## 参考答案

1. `选择器 { 属性: 值; }` 例如 `h1 { color: red; }`
2. 标签选择器 `h1 { color: blue; }`;class 选择器:给段落挂 `class="gray"`,写 `.gray { color: gray; }`
3. `margin` 是盒子**外面**的距离(和别人隔多远),`padding` 是盒子**里面**的距离(内容离边框多远)
4. `max-width: 600px;` + `margin: 0 auto;`
5. `text-align: center;`
6. `border-radius: 12px;`
