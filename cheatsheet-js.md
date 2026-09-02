# JavaScript 完整速查卡(第 3 课)

## 写在哪 & 调试

```html
<body>
  ...页面内容...
  <script>
    console.log('调试信息');   // F12 → Console 查看
  </script>
</body>
```

## 变量与类型

```js
let count = 0;        // 可变
const name = '小明';  // 不可变(最常用)

// 类型: string 字符串 / number 数字 / boolean 布尔 / null / undefined
typeof 42        // 'number'
typeof 'hi'      // 'string'
```

## 运算符

```js
// 算术: + - * / %(取余)
7 % 2            // 1
// 比较: === !== > < >= <=
1 === '1'        // false(类型不同)
// 逻辑: &&(且) ||(或) !(非)
true && false    // false
```

## 字符串

```js
s.length              // 长度
s.toUpperCase()       // 大写
'你好' + name + '!'   // 拼接
`你好,${name}!`       // 模板字符串(反引号)
```

## 条件

```js
if (a > 90) { ... } else if (a > 60) { ... } else { ... }
const x = score >= 60 ? '及格' : '加油';   // 三元
```

## 循环

```js
for (let i = 0; i < 5; i++) { ... }   // 0,1,2,3,4
while (n < 3) { ... }                 // 条件为真就循环
```

## 数组

```js
const arr = ['a', 'b', 'c'];
arr[0]          // 'a'(下标从 0)
arr.length      // 3
arr.push('d')   // 末尾加 → ['a','b','c','d']
arr.pop()       // 去末尾
for (let i = 0; i < arr.length; i++) { arr[i]; }  // 遍历
```

## 函数

```js
function add(a, b) { return a + b; }   // 声明
add(2, 3);                             // 5
const double = (x) => x * 2;           // 箭头函数
```

## DOM 三件套

```js
// 1. 抓元素(# = id,. = class,querySelectorAll 抓多个)
const btn = document.querySelector('#btn');

// 2. 监听事件
btn.addEventListener('click', function () { ... });
// 事件名:click 点击 / input 输入时

// 3. 读写
el.textContent = '新文字';      // 改文字
input.value                     // 读输入框
el.classList.add('red')         // 加 class
el.classList.remove('red')      // 去 class
```

## 动态创建元素

```js
const li = document.createElement('li');
li.textContent = '内容';
list.appendChild(li);           // 挂到列表末尾
```

## 常见错误

| 现象 | 原因 |
|------|------|
| xxx is not defined | 没声明 / 拼错 |
| Cannot read properties of null | 没抓到元素(id 拼错 / script 位置错) |
| 点击没反应 | 事件名错 / 没绑定 |
| 判断永远走一边 | `=` 与 `===` 混用 |
| Unexpected token | 中文标点混入 |
