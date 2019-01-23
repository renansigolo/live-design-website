'use strict'

//GLOBAL
var gulp = require('gulp')
var browserSync = require('browser-sync').create()

//VARIABLES FOR WATCH
var sass = require('gulp-sass')
var cssnano = require('gulp-cssnano')
var sourcemaps = require('gulp-sourcemaps')
var autoprefixer = require('gulp-autoprefixer')
var rename = require('gulp-rename')
var eslint = require('gulp-eslint')
var uglify = require('gulp-uglify')
var concat = require('gulp-concat')
var babel = require('gulp-babel')

//VARIABLES FOR PRODUCTION
var del = require('del')
var htmlmin = require('gulp-htmlmin')
var sitemap = require('gulp-sitemap')
var imagemin = require('gulp-imagemin')
var imageminPngquant = require('imagemin-pngquant')
var imageminGuetzli = require('imagemin-guetzli')

//TASKS FOR WATCH

//Watch SCSS files -> sourcemap, autroprefixer, minify with cssnano, rename .css to .min.css
gulp.task('scss', function() {
  return gulp
    .src('src/assets/_pre/sass/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(
      autoprefixer({
        browsers: ['last 2 versions'],
        cascade: false
      })
    )
    .pipe(
      cssnano({
        zindex: false
      })
    )
    .pipe(
      rename(function(path) {
        if (path.extname === '.css') {
          path.basename = 'styles'
          path.basename += '.min'
        }
      })
    )
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('src/assets/css/'))
    .pipe(browserSync.stream())
})

//TASKS FOR THE WEB

//Watch JS files -> sourcemap, minifiy with uglify, concat for the website
var jsFilesWeb = ['src/assets/_pre/js/web/**/*.js']

gulp.task('jsWeb', function() {
  return gulp
    .src(jsFilesWeb)
    .pipe(sourcemaps.init())
    .pipe(
      babel({
        presets: ['@babel/env']
      })
    )
    .pipe(uglify())
    .pipe(concat('scriptsWeb.js'))
    .pipe(
      rename(function(path) {
        if (path.extname === '.js') {
          path.basename += '.min'
        }
      })
    )
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('src/assets/js/'))
    .pipe(browserSync.stream())
})

//Watch Libs -> concat JS libraries for the website
var libPathsWeb = [
  'node_modules/jquery/dist/jquery.min.js',
  'node_modules/materialize-css/dist/js/materialize.min.js',
  'node_modules/typed.js/lib/typed.min.js',
  'node_modules/particles.js/particles.js',
  'node_modules/jquery-mask-plugin/dist/jquery.mask.min.js'
]

gulp.task('jsLibsWeb', function() {
  return gulp
    .src(libPathsWeb)
    .pipe(concat('libsWeb.js'))
    .pipe(
      rename(function(path) {
        if (path.extname === '.js') {
          path.basename += '.min'
        }
      })
    )
    .pipe(gulp.dest('src/assets/js/'))
})

//TASKS FOR THE APP

//Watch JS files -> sourcemap, minifiy with uglify, concat for the app
var jsFilesApp = ['src/assets/_pre/js/app/**/*.js']

gulp.task('jsApp', function() {
  return gulp
    .src(jsFilesApp)
    .pipe(sourcemaps.init())
    .pipe(concat('scriptsApp.js'))
    .pipe(
      rename(function(path) {
        if (path.extname === '.js') {
          path.basename += '.min'
        }
      })
    )
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('src/assets/js/'))
    .pipe(browserSync.stream())
})

//Watch Libs -> concat JS libraries for the App
var libPathsApp = [
  'node_modules/angular/angular.min.js',
  'node_modules/@uirouter/angularjs/release/angular-ui-router.min.js',
  'node_modules/firebase/firebase.js',
  'node_modules/angularfire/dist/angularfire.min.js'
]

gulp.task('jsLibsApp', function() {
  return gulp
    .src(libPathsApp)
    .pipe(concat('libsApp.js'))
    .pipe(
      rename(function(path) {
        if (path.extname === '.js') {
          path.basename += '.min'
        }
      })
    )
    .pipe(gulp.dest('src/assets/js/'))
})

//TASKS FOR DISTRIBUTION

//Delete all files in the dist folder
gulp.task('clean', function() {
  return del.sync(['dist/**/*'])
})

//Minify HTML files
gulp.task('htmlmin', function() {
  return gulp
    .src('src/**/*.html')
    .pipe(
      htmlmin({
        collapseWhitespace: true
      })
    )
    .pipe(gulp.dest('dist'))
})

//Create sitemap.xml
gulp.task('sitemap', function() {
  gulp
    .src('src/**/*.html', {
      read: false
    })
    .pipe(
      sitemap({
        siteUrl: 'https://www.livedesign.com.br'
      })
    )
    .pipe(gulp.dest('dist'))
})

//Optimize Images - GIF, SVG and ICO
gulp.task('imagemin', function() {
  gulp
    .src('src/**/*.{gif,svg,ico}')
    .pipe(
      imagemin([
        imagemin.gifsicle({
          interlaced: true,
          optimizationLevel: 3
        })
      ])
    )
    .pipe(gulp.dest('dist'))
})

//Optimize Images - PNG
gulp.task('imageminPngquant', function() {
  gulp
    .src('src/**/*.png')
    .pipe(imagemin([imageminPngquant()]))
    .pipe(gulp.dest('dist'))
})

//Optimize Images - JPG ang JPEG
gulp.task('imageminGuetzli', function() {
  gulp
    .src('src/**/*.{jpg,jpeg}')
    .pipe(imagemin([imageminGuetzli()]))
    .pipe(gulp.dest('dist'))
})

//Copy remaining files to dist
gulp.task(
  'copy',
  ['scss', 'jsWeb', 'jsLibsWeb', 'jsApp', 'jsLibsApp'],
  function() {
    return gulp
      .src([
        'src/**/*.{pdf,htm,xml,txt,eot,ttf,woff,woff2,otf,ttf,php,css,js,json,map}',
        '!src/assets/_pre/**/*'
      ])
      .pipe(gulp.dest('dist'))
  }
)

//TASKS FOR DEBUGGING

//Watch JS files -> sourcemap, lint with eslint, minifiy with uglify, concat for the website
gulp.task('jsDebug', function() {
  return gulp
    .src(jsFilesWeb)
    .pipe(sourcemaps.init())
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(uglify())
    .pipe(concat('scriptsWeb.js'))
    .pipe(
      rename(function(path) {
        if (path.extname === '.js') {
          path.basename += '.min'
        }
      })
    )
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('src/assets/js/'))
    .pipe(browserSync.stream())
})

//GULP TASKS

// Static server
gulp.task('serve', ['scss', 'jsWeb', 'jsApp'], function() {
  browserSync.init({
    server: {
      baseDir: './src/'
    }
  })
  gulp.watch('src/assets/_pre/sass/**/*.scss', ['scss'])
  gulp.watch('src/assets/_pre/js/web/**/*.js', ['jsWeb'])
  gulp.watch('src/assets/_pre/js/app/**/*.js', ['jsApp'])
  gulp.watch('src/**/*.html').on('change', browserSync.reload)
})

// Static server for debugging
gulp.task('serveDebug', ['scss', 'jsDebug', 'jsApp'], function() {
  browserSync.init({
    server: {
      baseDir: './src/'
    }
  })
  gulp.watch('src/assets/_pre/sass/**/*.scss', ['scss'])
  gulp.watch('src/assets/_pre/js/web/**/*.js', ['jsDebug'])
  gulp.watch('src/assets/_pre/js/app/**/*.js', ['jsApp'])
  gulp.watch('src/**/*.html').on('change', browserSync.reload)
})

//Watch task
gulp.task('watch', function() {
  gulp.watch('src/assets/_pre/sass/**/*.scss', ['scss'])
  gulp.watch('src/assets/_pre/js/web/**/*.js', ['jsWeb'])
  gulp.watch('src/assets/_pre/js/app/**/*.js', ['jsApp'])
  gulp.watch('node_modules/**/*', ['jsLibsWeb', 'jsLibsApp'])
})

//Compile task
gulp.task('compile', ['scss', 'jsWeb', 'jsLibsWeb', 'jsApp', 'jsLibsApp'])

//Distribution task
gulp.task('default', [
  'clean',
  'htmlmin',
  'scss',
  'jsLibsWeb',
  'jsWeb',
  'jsLibsApp',
  'jsApp',
  'sitemap',
  'imagemin',
  'imageminPngquant',
  'imageminGuetzli',
  'copy'
])
