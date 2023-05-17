const { Lame } = require('node-lame');

const validBitrates = {
  256: true,
  16: true,
  8: true,
  24: true,
  32: true,
  40: true,
  48: true,
  56: true,
  64: true,
  80: true,
  96: true,
  112: true,
  128: true,
  144: true,
  160: true,
  192: true,
  224: true,
  320: true,
};

const emptyMeta = {
  title: '',
  artist: '',
  album: '',
  year: '',
  comment: '',
  track: '',
  genre: '',
};

const defaultOpts = {
  bitrate: 256,
  vbr: true,
  'vbr-quality': 0,
  'crc-error-protection': true,
  bitwidth: 16,
  meta: emptyMeta
};

async function encode(file, outputFilepath, opts = defaultOpts) {
  const encoder = new Lame({
    ...defaultOpts,
    ...opts,
    bitrate: opts.bitrate && validBitrates[opts.bitrate] ? opts.bitrate : defaultOpts.bitrate,
    output: outputFilepath,
  }).setFile(file);

  try {
    const result = await encoder.encode();
    return result;
    // console.log('Encoding successful!');
    // console.log(`MP3 outputed to ${outputFilepath}`);
    // process.exit(1);
  } catch (error) {
    console.error(error.message);
    return false;
    // process.exit(0);
  }
}

module.exports = {
  encode,
  emptyMeta
};
