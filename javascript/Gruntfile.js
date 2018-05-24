module.exports = function (grunt) {

  //Configure main project settings
  grunt.initConfig({

    //Basic settings and info for plugins
    pkg: grunt.file.readJSON('package.json'),

    //Plugin name without "grunt-contrib-" ------image-resize
    image_resize: {
    options: {
      width: 950,
      height: 355,
      overwrite: true
    },
    files: {
        'imgresize/calculator.png': 'img/calculator.png',
        'imgresize/tictactoe.png': 'img/tictactoe.png',
        'imgresize/twitchViewer.png': 'img/twitchViewer.png',
        'imgresize/Pomodoro.png': 'img/Pomodoro.png',
        'imgresize/Tribute.png': 'img/Tribute.png',
        'imgresize/quoteGenerator.png': 'img/quoteGenerator.png',
        'imgresize/weatherApp.png': 'img/weatherApp.png'
      },
  },

    //Plugin name without "grunt-contrib-" ------CSSMIN
    cssmin: {
      combine: {
        files: {
          'allCSS.min.css': ['bootstrap.min.css','animate.min.css','fontawesome-all.css','main.css', 'responsive.css']
        }
      }
    },

    //Plugin name without "grunt-contrib-" -----ULGIFY
    uglify: {
      dist: {
        files: {
          'javascript.min.js': ['javascript.js'],
          'jquery.nicescroll.min.js': ['jquery.nicescroll.js']
        }
      }
    },

    //Plugin name without "grunt-contrib-" -----IMAGEMIN
    imagemin: {
      dynamic: {
        options: {
          optimizationLevel: 3,
          progressive: true
            },
        files: [{
          expand: true,
          cwd: 'imgresize/',
          src: ['**/*.{png,jpg,gif}'],
          dest: 'imgmin/'
        }]
      }
    }

  });

  // load the plugins
  grunt.loadNpmTasks('grunt-image-resize');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-imagemin');

  //Do the tasks
  grunt.registerTask('default', ['image_resize', 'cssmin', 'uglify', 'imagemin']);

};
