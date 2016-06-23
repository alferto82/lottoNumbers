module.exports = function(grunt) {
    grunt.initConfig({
        jshint: {
            files: ['Gruntfile.js', 'src/**/*.js', 'test/**/*.js'],
            options: {
                globals: {
                    jQuery: true
                }
            }
        },
        copy: {
            js: {
                expand: true,
                cwd: './node_modules',
                dest: './public/js/libs/',
                flatten: true,
                filter: 'isFile',
                src: [
                    './bootstrap/dist/js/bootstrap.min.js',
                    './jquery/dist/jquery.min.js'
                ]
            },
            css: {
                expand: true,
                cwd: './node_modules',
                dest: './public/css/',
                flatten: true,
                filter: 'isFile',
                src: [
                    './bootstrap/dist/css/bootstrap.min.css',
                    './bootstrap/dist/css/bootstrap-theme.css'
                ]
            }
        }
    });

    grunt.registerTask('default', ['jshint', 'copy']);
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-copy');
};
