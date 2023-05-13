#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { Lame } = require('node-lame');

console.log('256 Variable Bitrate MP3 LAME Encoder\n');

if (process.argv[2]) {
  const p = process.argv[2];
  const baseName = path.basename(p).replace(/\.[a-zA-Z0-9]*$/, '');
  const dirName = path.dirname(p);
  const outputFilepath = path.join(dirName, `${baseName}.mp3`);

  if (!fs.existsSync(p)) {
    console.warn(`Could not locate ${p}`);
    process.exit(1);
  }

  const encoder = new Lame({
    output: outputFilepath,
    bitrate: 256,
    vbr: true,
    'vbr-quality': 0,
    'crc-error-protection': true,
  }).setFile(p);

  encoder
    .encode()
    .then(() => {
      console.log('Encoding successful!');
      console.log(`MP3 outputed to ${outputFilepath}`);
      process.exit(1);
    })
    .catch((error) => {
      console.error(error.message);
      process.exit(0);
    });
} else {
  console.log('You must provide the path to an input file.');
  console.log('E.g. vbr ./my-cool-song.wav');
}
