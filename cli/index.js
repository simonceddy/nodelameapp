// console.log(process);

const validOptions = {
  '--artist': { type: String, key: 'artist' },
  '--album': { type: String, key: 'album' },
  '--bitrate': { type: String, key: 'bitrate' },
};

const validAliases = {
  '-A': '--artist',
  '-a': '--artist',
  '-L': '--album',
  '-B': '--bitrate'
};

const opts = {};

function getValForOpt(opt, id, argv) {
  if (opt.type === String) {
    if (argv[id + 1] === undefined) {
      throw Error(`Missing value for option ${opt.key}`);
    }
    return process.argv[id + 1];
  }
  return true;
}

process.argv.forEach((val, id) => {
  if (val.startsWith('--') && validOptions[val]) {
    const o = validOptions[val];
    opts[o.key] = getValForOpt(o, id, process.argv);
  } else if (val.startsWith('-') && validAliases[val]) {
    const o = validOptions[validAliases[val]];
    opts[o.key] = getValForOpt(o, id, process.argv);
  }
});

console.log(opts);
