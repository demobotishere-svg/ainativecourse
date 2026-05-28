const fs = require('fs');
const path = require('path');
const dir = './src/components/sections';
const files = fs.readdirSync(dir);
const btnPattern = /<a href=\"#matrix-cta\".*?>[\s\S]*?<\/a>/;

files.forEach(f => {
  if (['HeroSection.tsx', 'Navbar.tsx', 'MatrixCTASection.tsx', 'Footer.tsx'].includes(f)) return;
  const p = path.join(dir, f);
  let content = fs.readFileSync(p, 'utf8');
  
  let modified = false;
  if (!content.includes('import LeadCaptureForm')) {
    content = content.replace(/import styles from '.*?';/, match => match + '\nimport LeadCaptureForm from \'@/components/LeadCaptureForm\';');
    modified = true;
  }
  
  if (btnPattern.test(content)) {
    content = content.replace(btnPattern, '<LeadCaptureForm />');
    modified = true;
  }
  
  if (modified) {
    fs.writeFileSync(p, content);
    console.log('Updated', f);
  }
});
