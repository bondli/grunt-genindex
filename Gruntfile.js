/*
 * grunt-genindex
 * https://github.com/bondli/grunt-genindex
 *
 * Copyright (c) 2015 pixi
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({

    // Configuration to be run (and then tested).
    genindex: {
      options: {
        'target': '.tmp'
      },
      files: ['./htmls/*.html']
    }

  });

  // Actually load this plugin's task(s).
  grunt.loadTasks('tasks');

  // By default, lint and run all tests.
  grunt.registerTask('default', 'generator index.html', function(){
    return grunt.task.run(['genindex']);
  });

};
