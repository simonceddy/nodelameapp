/* eslint-disable no-unused-vars */
const yargs = require('yargs/yargs');
// const path = require('path');
const { hideBin } = require('yargs/helpers');
const convertAllInDir = require('./convertAllInDir');
const convertFile = require('./convertFile');

/**
 *
 * @param {yargs.Argv} app
 * @returns {yargs.Argv}
 */
function initOptions(app) {
  app.option('title', {
    type: 'string',
    description: 'A title for mp3 metadata.',
  })
    .option('artist', {
      type: 'string',
      description: 'MP3 metadata artist.',
    })
    .option('album', {
      type: 'string',
      description: 'MP3 metadata album.'
    })
    .option('year', {
      type: 'number',
      description: 'MP3 metadata year.'
    })
    .option('track', {
      type: 'number',
      description: 'MP3 metadata track number.'
    })
    .option('comment', {
      type: 'string',
      description: 'MP3 metadata comment.'
    })
    .option('genre', {
      type: 'string',
      description: 'MP3 metadata genre.'
    })
    .option('bitrate', {
      alias: 'b',
      type: 'number',
      description: 'The bitrate of the converted mp3s. Default is 256.',
      default: 256,
    });
  return app;
}

const cli = yargs(hideBin(process.argv));
initOptions(
  initOptions(cli.command(
    'all [directory]',
    'Convert all wavs in the given directory to mp3s. If no directory is given it will use the current directory.',
    (b) => b.positional('directory', {
      describe: 'The directory to scan for wavs.',
      default: process.cwd(),
    }),
    async (argv) => {
      if (argv.help) {
        console.log('help');
      } else await convertAllInDir(argv);
    }
  ))
    .command(
      'convert [filename]',
      'Convert the given wav into an mp3.',
      (b) => b.positional('filename', { describe: 'The wav filename relative to the current directory', demandOption: true }),
      async (argv) => {
        if (argv.help) {
          console.log('help');
        } else await convertFile(argv.filename, argv);
      }
    )
)
  .parse();

// match args[0] to commands
// if no match try to run default command
