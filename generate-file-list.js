const fs = require('fs');
const path = require('path');

const dir = './'; // folder with HTML files
const outputFile = 'fileList.js';

fs.readdir(dir, (err, files) => {
    if (err) throw err;

    const htmlFiles = files.filter(f => f.endsWith('.html') && f !== 'index.html');

    const content = `const files = ${JSON.stringify(htmlFiles, null, 4)};`;

    fs.writeFileSync(outputFile, content);
    console.log(`✅ File list generated: ${outputFile}`);
});
