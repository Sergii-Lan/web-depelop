module.exports = function(grunt) {    // 1. Робимо настройки grunt    grunt.initConfig({// обєднання js i css файлів        sass: {            dist: {                options: {                    sourcemap: 'none'                },                files: [{                    expand: true,                    cwd: 'src/scss',                    src: ['style*.scss'],                    dest: 'dist/css',                    ext: '.css'                }]            }        },        //добавляем префиксы и минифицыруем цсс файлы        postcss: {            options: {                map: false,                processors: [                    require('autoprefixer')(),                    require('cssnano')()                ]            },            dist: {                src: 'dist/css/*css'            }        },        // мініфікація файлів        uglify: {            build: {                files: [{                    expand: true,                    cwd: 'src/js',                    src: '*.js',                    dest: 'dist/js',                    ext: '.min.js'                }]            }        },        //добавляем возможность импортировать html блоки в основные файлы        html_imports: {            all: {                expand: true,                cwd: 'src/',                src: '*.html',                dest: ''            }        },        watch: {            css: {                // We watch and compile sass files as normal but don't live reload here                files: ['src/scss/*.scss'],                tasks: ['sass', 'postcss']            },            js: {                files: ['src/js/*.js'],                tasks: ['uglify']            },            html: {              files: ['src/**/*.html'],                tasks: ['html_imports']            },            livereload: {                options: { livereload: true},                files:['/*.html', 'dist/**/*']            }        }    });    // плагіни для використання    grunt.loadNpmTasks('grunt-contrib-sass');    grunt.loadNpmTasks('grunt-contrib-watch');    grunt.loadNpmTasks('grunt-contrib-uglify');    grunt.loadNpmTasks('grunt-css');    grunt.loadNpmTasks('grunt-html-imports');    grunt.loadNpmTasks('grunt-postcss');    // консоль grunt, що виконується    grunt.registerTask('default', ['sass', 'postcss', 'html_imports', 'uglify' ]);    grunt.registerTask('css', ['sass', 'postcss']);};