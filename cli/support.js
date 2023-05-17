const validOptions = {
  artist: { type: String, key: 'artist', meta: true },
  album: { type: String, key: 'album', meta: true },
  bitrate: { type: String, key: 'bitrate', meta: false },
  title: { type: String, key: 'title', meta: true },
  year: { type: String, key: 'year', meta: true },
  comment: { type: String, key: 'comment', meta: true },
  track: { type: String, key: 'track', meta: true },
  genre: { type: String, key: 'genre', meta: true },
};

const validAliases = {
  A: 'artist',
  a: 'artist',
  L: 'album',
  B: 'bitrate',
  Y: 'year',
  c: 'comment',
  T: 'track',
  t: 'title',
  g: 'genre'
};

module.exports = {
  validAliases,
  validOptions
};
