#!/usr/bin/env node
// 第 1 课作业验收脚本
// 用法: node stage0/check-lesson01.mjs stage0/lesson01.html
import fs from 'fs';

const file = process.argv[2];
if (!file) {
  console.error('用法: node stage0/check-lesson01.mjs <你的html文件路径>');
  process.exit(1);
}
if (!fs.existsSync(file)) {
  console.error('找不到文件: ' + file);
  process.exit(1);
}

const raw = fs.readFileSync(file, 'utf8');
// 先去掉注释再检查标签:注释里"提到"标签名不算真用了
const html = raw.replace(/<!--[\s\S]*?-->/g, '');

const checks = [
  ['页面声明 <!DOCTYPE html>', /<!DOCTYPE html>/i],
  ['根标签 <html>', /<html[^>]*>/i],
  ['头部 <head>', /<head>/i],
  ['标题 <title>', /<title>/i],
  ['字符编码 UTF-8(中文不乱码)', /charset\s*=\s*["']?utf-8/i],
  ['主体 <body>', /<body[^>]*>/i],
  ['一级标题 <h1>', /<h1[^>]*>/i],
  ['段落 <p>', /<p[^>]*>/i],
  ['加粗强调 <strong>', /<strong>/i],
  ['无序列表 <ul>', /<ul[^>]*>/i],
  ['至少一个列表项 <li>', /<li[^>]*>/i],
  ['链接 <a href="...">', /<a\s+[^>]*href\s*=/i],
  ['新窗口打开 target="_blank"', /target\s*=\s*["']_blank["']/i],
  ['至少一条注释 <!-- -->', /<!--[\s\S]*?-->/],
];

let pass = 0;
for (const [name, re] of checks) {
  // "注释"这一项检查原始内容,其余检查去掉注释后的内容
  const src = name.includes('注释') ? raw : html;
  const ok = re.test(src);
  if (ok) pass++;
  console.log((ok ? '✅' : '❌') + ' ' + name);
}
console.log('\n通过 ' + pass + '/' + checks.length + ' 项');
if (pass === checks.length) {
  console.log('🎉 全部通过!可以把作业发给老师了。');
  process.exit(0);
} else {
  console.log('还有 ' + (checks.length - pass) + ' 项没过,对照速查卡补一补。');
  process.exit(1);
}
