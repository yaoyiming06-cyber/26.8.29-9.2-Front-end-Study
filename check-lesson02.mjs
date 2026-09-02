#!/usr/bin/env node
// 第 2 课作业验收脚本
// 用法: node stage0/check-lesson02.mjs stage0/lesson02.html
import fs from 'fs';

const file = process.argv[2];
if (!file) {
  console.error('用法: node stage0/check-lesson02.mjs <你的html文件路径>');
  process.exit(1);
}
if (!fs.existsSync(file)) {
  console.error('找不到文件: ' + file);
  process.exit(1);
}

const raw = fs.readFileSync(file, 'utf8');
const html = raw.replace(/<!--[\s\S]*?-->/g, '');

const checks = [
  ['页面里有 <h2>(标题层级修正)', /<h2[^>]*>/i],
  ['有样式:内部 <style> 或外部样式表 link', /<style[\s>]|<link[^>]*stylesheet/i],
  ['至少一个 class 选择器 .xxx { }', /\.[a-zA-Z][\w-]*\s*\{/],
  ['HTML 里挂上了 class="..."', /class\s*=\s*"/i],
  ['用了文字颜色 color', /(^|[^-])color\s*:/m],
  ['用了背景色 background-color', /background(-color)?\s*:/i],
  ['用了字号/字体 font-size 或 font-family', /font-(size|family)\s*:/i],
  ['用了间距 margin 或 padding', /(margin|padding)(-[a-z]+)?\s*:/i],
  ['用了圆角或边框 border-radius / border', /border(-radius)?\s*:/i],
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
  console.log('还有 ' + (checks.length - pass) + ' 项没过,对照 CSS 速查卡补一补。');
  process.exit(1);
}
