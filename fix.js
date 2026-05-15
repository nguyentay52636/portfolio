const fs = require('fs');
let content = fs.readFileSync('src/style/style.css', 'utf8');

content = content.replace(/ - /g, '-');
content = content.replace(/ %/g, '%');
content = content.replace(/: hover/g, ':hover');

fs.writeFileSync('src/style/style.css', content);
