# 第 3 课 · 练习 A/B 参考解答

> 先自己做,做完再来对答案。答案不止一种,结果对 + 你能解释 = 算对。

## 练习 A(语法与类型)

```js
// 1. 建变量,看类型
let age = 20;
console.log(typeof age);      // 'number'

// 2. 算出生年份
console.log(2026 - age);      // 2006

// 3. 模板字符串自我介绍
const name = '兆辉';
console.log(`我是${name},今年${age}岁`);

// 4. if 判断
if (age >= 18) {
  console.log('成年');
} else {
  console.log('未成年');
}

// 5. 故意写错:变量没声明就使用
console.log(noSuchVar);
// 报错:Uncaught ReferenceError: noSuchVar is not defined
// 读法:ReferenceError(引用错误)→ 你用了不存在的东西 → 是哪个 → not defined
```

## 练习 B(循环·数组·函数)

```js
// 1. 打印 1~10 的偶数
for (let i = 1; i <= 10; i++) {
  if (i % 2 === 0) {
    console.log(i);           // 2 4 6 8 10
  }
}

// 2. 数组求和与平均
const scores = [88, 92, 75, 100];
let sum = 0;
for (let i = 0; i < scores.length; i++) {
  sum += scores[i];           // += 是 sum = sum + scores[i] 的简写
}
console.log(sum);             // 355
console.log(sum / scores.length);  // 88.75

// 3. 函数 max(a, b)
function max(a, b) {
  return a > b ? a : b;       // 三元:A 部分学过
}
console.log(max(3, 7));       // 7
console.log(max(10, 2));      // 10
console.log(max(5, 5));       // 5

// 4. 判断偶数
function isEven(n) {
  return n % 2 === 0;         // return 可以直接返回 true/false
}
console.log(isEven(4));       // true
console.log(isEven(7));       // false
```

## 新冒出来的两个语法(顺带学)

| 写法 | 等价于 |
|------|--------|
| `sum += x` | `sum = sum + x` |
| `sum++` / `sum--` | `sum = sum + 1` / `sum = sum - 1` |
