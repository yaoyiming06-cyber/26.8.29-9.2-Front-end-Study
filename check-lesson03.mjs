#!/usr/bin/env node
// 第 3 课作业验收脚本
// 用法: node stage0/check-lesson03.mjs stage0/lesson03.html
import fs from 'fs';

const file = process.argv[2];
if (!file) {
  console.error('用法: node stage0/check-lesson03.mjs <你的html文件路径>');
  process.exit(1);
}
if (!fs.existsSync(file)) {
  console.error('找不到文件: ' + file);
  process.exit(1);
}

const raw = fs.readFileSync(file, 'utf8');
// 注释里提到关键词不算数,先去掉注释
const html = raw.replace(/<!--[\s\S]*?-->/g, '');

const checks = [
  ['有 <script> 标签', /<script[\s>]/i],
  ['有输入框 <input> 或按钮 <button>', /<(input|button)[\s>]/i],
  ['用了 querySelector 抓元素', /querySelector\s*\(/],
  ['用了 addEventListener 监听事件', /addEventListener\s*\(/],
  ['用了 function 或箭头函数 =>', /function\s*\(|=>/],
  ['读写了内容(value 或 textContent)', /\.(value|textContent)\b/],
  ['用了 if 判断', /\bif\s*\(/],
];

let pass = 0;
for (const [name, re] of checks) {
  const ok = re.test(html);
  if (ok) pass++;
  console.log((ok ? '✅' : '❌') + ' ' + name);
}
console.log('\n通过 ' + pass + '/' + checks.length + ' 项');
if (pass === checks.length) {
  console.log('🎉 全部通过!把作业发给老师吧。');
  process.exit(0);
} else {
  console.log('还有 ' + (checks.length - pass) + ' 项没过,对照 JS 速查卡补一补。');
  process.exit(1);
}
