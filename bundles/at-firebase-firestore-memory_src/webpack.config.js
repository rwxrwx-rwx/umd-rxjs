const { singleSpaAngularWebpack } = require('../single-spa-webpack');

  require('@firebase/firestore');

  module.exports = (config, options) => {
    const custom = singleSpaAngularWebpack(config, options);
    const filename = 'at-firebase-firestore-memory';

    custom.entry = {
      '@firebase/firestore/memory': '@firebase/firestore/memory'
    };
    custom.output.filename = filename + '.umd' + (config.mode === 'development' ? '' : '.min') + '.js';
    custom.externals.push('tslib', '@firebase/util', '@firebase/component', '@firebase/logger', '@firebase/webchannel-wrapper', '@firebase/app');

    return custom;
  };
