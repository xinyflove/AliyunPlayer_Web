const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const args = process.argv.slice(2);
const isDev = args.includes('--dev');
const componentNames = args.filter(arg => arg !== '--dev' && arg !== 'all');

const npmscript = isDev ? 'build_customize_dev' : 'build_customize';

let buildcommand = [];

if (componentNames.length === 0) {
  const componentsDir = path.join(__dirname, 'src', 'components');
  const dirs = fs.readdirSync(componentsDir);
  
  dirs.forEach(dir => {
    const fullPath = path.join(componentsDir, dir);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory() && dir !== 'images') {
      buildcommand.push(`./src/components/${dir}/export.js`);
    }
  });
} else {
  componentNames.forEach(name => {
    const componentDir = `./src/components/${name}Component`;
    buildcommand.push(`${componentDir}/export.js`);
  });
}

buildcommand.push('./src/assets/scss/index.scss');

const command = `npm run ${npmscript} ${buildcommand.join(' ')}`;
console.log('Running:', command);

execSync(command, { stdio: 'inherit' });
