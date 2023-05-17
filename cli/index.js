const yargs = require('yargs/yargs');
const { hideBin } = require('yargs/helpers');
const getOptions = require('./getOptions');

const { argv } = yargs(hideBin(process.argv));

const opts = getOptions(argv);
const args = argv._;
console.log(opts, args);
