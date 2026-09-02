# 第 3 课自查测验(JavaScript,12 题)

先默答,答不出回去看速查卡/主页讲义。

## A 语法与类型

1. `let` 和 `const` 的区别?平时该多用哪个?
2. `typeof 'abc'` 和 `typeof 3.14` 分别是什么?
3. `7 % 2` 等于几?怎么用 `%` 判断一个数是偶数?
4. `1 === '1'` 是 true 还是 false?为什么?
5. `'你好' + name` 和 `` `你好,${name}` `` 两种拼接,哪个是模板字符串写法?

## B 循环·数组·函数

6. `for (let i = 0; i < 3; i++)` 会循环几次?`i` 的值分别是?
7. 数组 `arr = ['a','b','c']`,怎么拿到 'c'?怎么在末尾加一项 'd'?
8. 函数里 `return` 是干什么的?
9. 把 `function add(a,b){ return a+b }` 写成箭头函数。

## C/D DOM

10. 页面有 `<button id="run">`,怎么用 JS 抓到它?
11. 怎么让它被点击时执行 `sayHi()`?事件名是什么?
12. 想在页面上动态添加一个新的 `<li>`,用哪两个方法?

---

## 参考答案

1. `let` 可改、`const` 不可改;多用 `const`,需要变的才用 `let`
2. `'string'` 和 `'number'`
3. `1`;`n % 2 === 0` 就是偶数
4. `false`;`===` 连类型一起比,数字 1 ≠ 字符串 '1'
5. 第二种(反引号 + `${}`)
6. 3 次(0、1、2)
7. `arr[2]`;`arr.push('d')`
8. 把结果交回给调用处(`const r = add(1,2)`)
9. `const add = (a, b) => a + b;`
10. `const btn = document.querySelector('#run');`
11. `btn.addEventListener('click', sayHi);`(事件名 click)
12. `document.createElement('li')` 创建 + `appendChild` 挂载
