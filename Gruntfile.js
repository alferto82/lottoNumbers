module.exports = function(grunt) {    
    grunt.initConfig({
        clean: ["./public/"],
        jshint: {
            files: ['Gruntfile.js', 'src/**/*.js', 'test/**/*.js'],
            options: {
                esnext: true,
                jquery: true
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
                    './jquery/dist/jquery.min.js',
                    './jquery.loadtemplate/jquery-loadTemplate/jquery.loadTemplate-1.5.0.min.js'
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
        },
        '6to5': {
            options: {
                modules: 'common'
            },

            build: {
                files: [{
                    expand: true,
                    cwd: './src/js',
                    src: ['**/*.js'],
                    dest: './public/js/',
                }],
            }
        }
    });

    grunt.registerTask('default', ['clean', 'jshint', 'copy', '6to5']);
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-6to5');
    grunt.loadNpmTasks('grunt-contrib-clean');
};
