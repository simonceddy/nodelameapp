const { validAliases, validOptions } = require('./support');

module.exports = function getOptions(argv = {}) {
  const opts = {};
  const meta = {};

  Object.keys(argv).forEach((k) => {
    const key = validAliases[k] || k;
    const val = argv[k];
    if (validOptions[key]) {
      const o = validOptions[key];
      if (o.meta) meta[o.key] = val; else opts[o.key] = val;
    }
  });

  return {
    ...opts,
    meta
  };
};
