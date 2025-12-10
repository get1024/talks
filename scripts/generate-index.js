// scripts/generate-index.js
import fs from 'node:fs';
import path from 'node:path';

const distDir = path.resolve('dist');
const packagesDir = path.resolve('packages');

// 获取所有 Slidev 项目（假设文件夹名就是路径名）
// 过滤掉 theme-shared 和以 . 开头的文件
const slides = fs.readdirSync(packagesDir).filter(dir => {
    return fs.statSync(path.join(packagesDir, dir)).isDirectory() && 
           !dir.startsWith('.') && 
           dir !== 'theme-shared';
});

const htmlContent = `
<!DOCTYPE html>
<html>
<head>
    <title>RyanJoy's Talks</title>
    <meta charset="utf-8">
    <style>
        body { font-family: sans-serif; max-width: 800px; margin: 40px auto; padding: 0 20px; }
        ul { list-style-type: none; padding: 0; }
        li { margin: 10px 0; }
        a { text-decoration: none; color: #0070f3; font-size: 1.2rem; }
        a:hover { text-decoration: underline; }
    </style>
</head>
<body>
    <h1>RyanJoy's Slidev Collection</h1>
    <ul>
        ${slides.map(slug => `<li><a href="/${slug}/">📄 ${slug}</a></li>`).join('')}
    </ul>
</body>
</html>
`;

if (!fs.existsSync(distDir)){
    fs.mkdirSync(distDir);
}
fs.writeFileSync(path.join(distDir, 'index.html'), htmlContent);
console.log('Generated index.html with links:', slides);