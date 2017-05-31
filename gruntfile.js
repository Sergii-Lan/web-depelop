module.exports = function(grunt) {    // 1. Робимо настройки grunt    grunt.initConfig({// обєднання js i css файлів        concat: {            options: {                // Task-specific options go here.                separator: ''            },            scss: {                src: ['src/scss/main.scss','src/scss/reset.scss'],                dest: 'src/scss/style.scss'            },            js: {                src: ['src/js/script.js'],                dest: 'dist/js/main.js'            }        },        sass: {            dist: {                files: [{                    expand: true,                    cwd: 'src/scss',                    src: ['style.scss'],                    dest: 'dist/css',                    ext: '.css'                }]            }        },        // мініфікація файлів        uglify: {            js_min: {                src: 'dist/js/main.js',                dest: 'dist/js/main.min.js'            }        },        cssmin: {            css_min:{                src: 'dist/css/style.css',                dest: 'dist/css/style.min.css'            }        },        watch: {            sass: {                // We watch and compile sass files as normal but don't live reload here                files: ['src/scss/*.scss'],                tasks: ['concat','sass']            }        }    });    // плагіни для використання    grunt.loadNpmTasks('grunt-contrib-concat');    grunt.loadNpmTasks('grunt-contrib-sass');    grunt.loadNpmTasks('grunt-contrib-watch');    grunt.loadNpmTasks('grunt-contrib-uglify');    grunt.loadNpmTasks('grunt-css');    // консоль grunt, що виконується    grunt.registerTask('default', ['concat', 'sass', 'uglify', 'cssmin']);};