const fs = require('fs');
const path = require('path');

function findAllByType(directory, type = 'wav') {
  if (!fs.lstatSync(directory).isDirectory()) return null;
  return fs.readdirSync(directory).map((v) => {
    const fullPath = path.resolve(directory, v);
    if (fs.lstatSync(fullPath).isFile() && v.endsWith(`.${type}`)) return fullPath;
    return false;
  })
    .filter((val) => val !== false);
}

module.exports = {
  findAllByType
};
