/*!
 * question-force <https://github.com/jonschlinkert/question-force>
 *
 * Copyright (c) 2016, Jon Schlinkert.
 * Licensed under the MIT License.
 */

'use strict';

var mm = require('micromatch');
var extend = require('extend-shallow');

module.exports = function(config) {
  return function(app) {

    app.force = function(patterns, options) {
      var opts = extend({}, config, options);
      var isMatch;
      if (Array.isArray(patterns)) {
        isMatch = function(key) {
          return mm.any(patterns, opts);
        };
      } else {
        isMatch = mm.matcher(patterns, opts);
      }

      var len = this.queue.length;
      while (len--) {
        var key = this.queue[len];
        if (isMatch(key)) {
          var question = this.get(key);
          question.force();
        }
      }
      return this;
    };
  };
};
