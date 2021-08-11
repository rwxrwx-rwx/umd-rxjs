const { singleSpaAngularWebpack } = require('../single-spa-webpack');

  require('ng-zorro-antd');

  module.exports = (config, options) => {
    const custom = singleSpaAngularWebpack(config, options);
    const filename = 'ng-zorro-antd-anchor';

    custom.entry = {
      'ng-zorro-antd/anchor': 'ng-zorro-antd/anchor'
    };
    custom.output.filename = filename + '.umd' + (config.mode === 'development' ? '' : '.min') + '.js';
    custom.externals.push('tslib', 'rxjs', 'rxjs/operators', 'zone.js', '@angular/core', '@angular/common', '@angular/cdk/platform', '@angular/cdk', '@angular/animations', '@angular/platform-browser', '@angular/forms', '@angular/router', 'ng-zorro-antd/core/types', '@angular/cdk/bidi', 'ng-zorro-antd/core/environments', '@angular/cdk/coercion', 'ng-zorro-antd/core/logger', 'ng-zorro-antd/core/util', 'ng-zorro-antd/core/polyfill', '@angular/cdk/layout', 'ng-zorro-antd/core/services', 'ng-zorro-antd/core/config', 'ng-zorro-antd/affix');

    return custom;
  };
