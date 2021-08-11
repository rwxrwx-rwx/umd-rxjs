const { singleSpaAngularWebpack } = require('../single-spa-webpack');

  require('ng-zorro-antd');

  module.exports = (config, options) => {
    const custom = singleSpaAngularWebpack(config, options);
    const filename = 'ng-zorro-antd-select';

    custom.entry = {
      'ng-zorro-antd/select': 'ng-zorro-antd/select'
    };
    custom.output.filename = filename + '.umd' + (config.mode === 'development' ? '' : '.min') + '.js';
    custom.externals.push('tslib', 'rxjs', 'rxjs/operators', 'zone.js', '@angular/core', '@angular/common', '@angular/cdk/coercion', '@angular/cdk/platform', '@angular/cdk/bidi', '@angular/cdk/collections', '@angular/cdk/scrolling', '@angular/cdk', '@angular/animations', '@angular/platform-browser', '@angular/forms', '@angular/router', 'ng-zorro-antd/core/environments', 'ng-zorro-antd/core/types', 'ng-zorro-antd/core/logger', 'ng-zorro-antd/core/util', 'ng-zorro-antd/core/polyfill', '@angular/cdk/layout', 'ng-zorro-antd/core/services', '@angular/cdk/keycodes', '@angular/cdk/observers', '@angular/cdk/a11y', '@angular/cdk/portal', '@angular/cdk/overlay', 'ng-zorro-antd/core/animation', 'ng-zorro-antd/core/config', '@angular/animations/browser', '@angular/platform-browser/animations', 'ng-zorro-antd/core/no-animation', 'ng-zorro-antd/core/outlet', 'ng-zorro-antd/core/overlay', 'ng-zorro-antd/core/transition-patch', 'ng-zorro-antd/core/time', 'ng-zorro-antd/i18n', 'ng-zorro-antd/empty', '@angular/common/http', 'ng-zorro-antd/icon');

    return custom;
  };
