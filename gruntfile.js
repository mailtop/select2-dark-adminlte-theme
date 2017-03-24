module.exports = function(grunt) {
  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    sass: {
      dist: {
        options: {
          outputStyle: 'compressed'
        },
        files: {
          'select2-adminlte.min.css': [
            'src/scss/layout.scss'
          ]
        }
      },
      dev: {
        options: {
          outputStyle: 'nested'
        },
        files: {
          'select2-adminlte.css': [
            'src/scss/layout.scss'
          ]
        }
      }
    }
  });

  grunt.registerTask('default', ['sass']);
};
