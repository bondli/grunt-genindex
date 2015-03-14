/*
 * grunt-genindex
 * https://github.com/bondli/grunt-genindex
 *
 * Copyright (c) 2015 pixi
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  // Please see the Grunt documentation for more information regarding task
  // creation: http://gruntjs.com/creating-tasks

  grunt.registerMultiTask('genindex', 'generator index.html', function() {
    // Merge task-specific and/or target-specific options with these defaults.
    var options = this.options({
      punctuation: '.',
      separator: ''
    });

    var indexFile = options.target + '/index.html';

    // Iterate over all specified file groups.
    this.files.forEach(function(f) {
      // Concat specified files.
      var src = f.src.filter(function(filepath) {
        // Warn on and remove invalid source files (if nonull was set).
        if (!grunt.file.exists(filepath)) {
          grunt.log.warn('Source file "' + filepath + '" not found.');
          return false;
        } else {
          return true;
        }
      }).map(function(filepath) {
        // Read file name
        return '<li><a href="' + filepath + '">' + filepath + '</a></li>';

      }).join(grunt.util.normalizelf(options.separator));

      var prefixTpl = '<html><head><meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no"><style type="text/css">h3{font-size:14px;}ul{list-style:none;}ul li {padding:5px;}</style></head><body><h3>本项目下的页面有：</h3><ul>',
        suffixTpl = '</ul></body></html>';

      // Write the destination file.
      grunt.file.write(indexFile, prefixTpl+src+suffixTpl);

      // Print a success message.
      grunt.log.writeln('File "' + indexFile + '" created.');
    });
  });

};
