const path = require('path');
const { encode } = require('../lame');
const getOptions = require('./getOptions');

async function convertFile(filepath, argv) {
  const baseName = path.basename(filepath).replace(/\.[a-zA-Z0-9]*$/, '');
  const dirName = path.dirname(filepath);
  const outputFilepath = path.join(dirName, `${baseName}.mp3`);
  const result = await encode(filepath, outputFilepath, getOptions(argv));
  if (!result) {
    console.error(`Encountered an issue encoding ${filepath}`);
  } else {
    console.log(`${outputFilepath} successfully created!`);
  }
  return result;
}

module.exports = convertFile;
