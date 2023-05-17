const validOptions = {
  artist: { type: String, key: 'artist', meta: true },
  album: { type: String, key: 'album', meta: true },
  bitrate: { type: String, key: 'bitrate', meta: false },
  title: { type: String, key: 'title', meta: true },
};

const validAliases = {
  A: 'artist',
  a: 'artist',
  L: 'album',
  B: 'bitrate'
};

module.exports = {
  validAliases,
  validOptions
};
