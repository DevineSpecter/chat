/*
 * socket
 * https://github.com/DevineSpecter/chat/socket.io
 *
 * Copyright (c) 2016 Grumăzescu Dragoș
 * Licensed under the MIT license.
 */

(function($) {

  // Collection method.
  $.fn.socket = function() {
    return this.each(function(i) {
      // Do something awesome to each selected element.
      $(this).html('awesome' + i);
    });
  };

  // Static method.
  $.socket = function(options) {
    // Override default options with passed-in options.
    options = $.extend({}, $.socket.options, options);
    // Return something awesome.
    return 'awesome' + options.punctuation;
  };

  // Static method default options.
  $.socket.options = {
    punctuation: '.'
  };

  // Custom selector.
  $.expr[':'].socket = function(elem) {
    // Is this element awesome?
    return $(elem).text().indexOf('awesome') !== -1;
  };

}(jQuery));
