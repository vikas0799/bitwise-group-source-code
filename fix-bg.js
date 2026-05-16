const fs = require('fs');
const path = require('path');

const walkSync = (dir, filelist = []) => {
  if (!fs.existsSync(dir)) return filelist;
  fs.readdirSync(dir).forEach(file => {
    const dirFile = path.join(dir, file);
    try {
      filelist = walkSync(dirFile, filelist);
    } catch (err) {
      if (err.code === 'ENOTDIR' || err.code === 'EBADF') {
        if (dirFile.endsWith('.tsx') || dirFile.endsWith('.ts')) {
            filelist.push(dirFile);
        }
      } else {
        throw err;
      }
    }
  });
  return filelist;
};

const dirs = [
    '/Users/vikas/Documents/Codex/2026-05-12/you-are-a-senior-frontend-architect/components',
    '/Users/vikas/Documents/Codex/2026-05-12/you-are-a-senior-frontend-architect/app'
];
const files = [];
dirs.forEach(dir => walkSync(dir, files));

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let originalContent = content;

  // Change bg-primary-dark back to bg-white so backgrounds are white
  content = content.replace(/bg-primary-dark/g, 'bg-white');
  
  if (content !== originalContent) {
    fs.writeFileSync(file, content, 'utf8');
    console.log(`Updated ${file}`);
  }
});
