module.exports = function(grunt) {
  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    sass: {
      dist: {
        options: {
          outputStyle: 'compressed'
        },
        files: {
          'dist/theme.min.css': [
            'src/scss/layout.scss'
          ]
        }
      },
      dev: {
        options: {
          outputStyle: 'nested'
        },
        files: {
          'dist/theme.css': [
            'src/scss/layout.scss'
          ]
        }
      }
    }
  });
  
  grunt.registerTask('default', ['sass']);
};
