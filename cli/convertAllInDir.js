// const path = require('path');
const { findAllByType } = require('../util');
const convertFile = require('./convertFile');

/**
 *
 * @param {import('yargs').ArgumentsCamelCase} argv
 */
async function convertAllInDir(argv) {
  const wavs = findAllByType(argv.directory);
  // console.log(wavs, argv);
  if (wavs.length < 1) {
    console.log(`No wavs found in the ${argv.directory}`);
    return 0;
  }

  await Promise.all(wavs.map(async (filepath) => {
    await convertFile(filepath);
  }));
  return 1;
}

module.exports = convertAllInDir;
