/* eslint-disable no-unused-vars */
const yargs = require('yargs/yargs');
// const path = require('path');
const { hideBin } = require('yargs/helpers');
const convertAllInDir = require('./convertAllInDir');
const convertFile = require('./convertFile');

const cli = yargs(hideBin(process.argv));
cli.command(
  'all [directory]',
  'Convert all wavs in the given directory to mp3s. If no directory is given it will use the current directory.',
  (b) => b.positional('directory', {
    describe: 'The directory to scan for wavs.',
    default: process.cwd(),
  }),
  async (argv) => {
    if (argv.help) {
      console.log('help');
      return 1;
    }
    await convertAllInDir(argv);
    return 1;
  }
)
  .command(
    'convert [filename]',
    'Convert the given wav into an mp3.',
    (b) => b.positional('filename', { describe: 'The wav filename relative to the current directory', demandOption: true }),
    async (argv) => {
      if (argv.help) {
        console.log('help');
      } else {
        await convertFile(argv.filename, argv);
      }
    }
  )
  .option('title', {
    alias: 'T',
    type: 'string',
    description: 'A title for mp3 metadata.',
  })
  .option('artist', {
    alias: 'A',
    type: 'string',
    description: 'Use the given artist for mp3 metadata.',
  })
  .option('album', {
    alias: 'L',
    type: 'string',
    description: 'Use the given album for mp3 metadata.'
  })
  .option('bitrate', {
    alias: 'B',
    type: 'number',
    description: 'The bitrate of the converted mp3s. Default is 256.',
    default: 256,
  })
  .parse();

// match args[0] to commands
// if no match try to run default command
