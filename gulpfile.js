'use strict'

/**************** Global Imports ****************/

const {series, parallel, watch, src, dest} = require('gulp')
const browserSync = require('browser-sync').create()

const sass = require('gulp-sass')
const cssnano = require('gulp-cssnano')
const autoprefixer = require('gulp-autoprefixer')
const rename = require('gulp-rename')
const uglify = require('gulp-uglify')
const concat = require('gulp-concat')
const babel = require('gulp-babel')

const del = require('del')
const htmlmin = require('gulp-htmlmin')
const sitemap = require('gulp-sitemap')
const imagemin = require('gulp-imagemin')
const imageminPngquant = require('imagemin-pngquant')
const imageminGuetzli = require('imagemin-guetzli')

/**************** Functions ****************/

// Watch SCSS files -> sourcemap, autroprefixer, minify with cssnano, rename .css to .min.css
const scss = () => {
  return src('src/assets/_pre/sass/*.scss', {sourcemaps: true})
    .pipe(sass().on('error', sass.logError))
    .pipe(
      autoprefixer({
        browsers: ['defaults'],
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
    .pipe(dest('src/assets/css/', {sourcemaps: true}))
    .pipe(browserSync.stream())
}

// Watch JS files -> sourcemap, minifiy with uglify, concat
const jsFiles = () => {
  return src('src/assets/_pre/js/web/**/*.js', {sourcemaps: true})
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
    .pipe(dest('src/assets/js/', {sourcemaps: true}))
    .pipe(browserSync.stream())
}

// Concat Minified JS libraries
const jsLibsWeb = () => {
  const libPathsWeb = [
    'node_modules/jquery/dist/jquery.min.js',
    'node_modules/materialize-css/dist/js/materialize.min.js',
    'node_modules/typed.js/lib/typed.min.js',
    'node_modules/particles.js/particles.js',
    'node_modules/jquery-mask-plugin/dist/jquery.mask.min.js'
  ]

  return src(libPathsWeb)
    .pipe(concat('libsWeb.js'))
    .pipe(
      rename(function(path) {
        if (path.extname === '.js') {
          path.basename += '.min'
        }
      })
    )
    .pipe(dest('src/assets/js/'))
}

const jsLibsApp = () => {
  const libPaths = [
    'node_modules/angular/angular.min.js',
    'node_modules/@uirouter/angularjs/release/angular-ui-router.min.js',
    'node_modules/firebase/firebase.js',
    'node_modules/angularfire/dist/angularfire.min.js'
  ]

  return src(libPaths)
    .pipe(concat('libsApp.js'))
    .pipe(
      rename(function(path) {
        if (path.extname === '.js') {
          path.basename += '.min'
        }
      })
    )
    .pipe(dest('src/assets/js/'))
}

// Delete all files in the dist folder
const clean = () => {
  del.sync(['dist/**/*'])
  return Promise.resolve()
}

// Minify HTML files
const minifyHtml = () => {
  return src('src/**/*.html')
    .pipe(
      htmlmin({
        collapseWhitespace: true
      })
    )
    .pipe(dest('dist'))
}

// Create sitemap.xml
const generateSitemap = () => {
  return src('src/**/*.html', {
    read: false
  })
    .pipe(
      sitemap({
        siteUrl: 'https://livedesign.com.br'
      })
    )
    .pipe(dest('dist'))
}

// Optimize Images - GIF, SVG and ICO
const optimizeGif = () => {
  return src('src/**/*.{gif,svg,ico}')
    .pipe(
      imagemin([
        imagemin.gifsicle({
          interlaced: true,
          optimizationLevel: 3
        })
      ])
    )
    .pipe(dest('dist/'))
}

// Optimize Images - PNG
const optimizePng = () => {
  return src('src/**/*.png')
    .pipe(imagemin([imageminPngquant()]))
    .pipe(dest('dist/'))
}

// Optimize Images - JPG ang JPEG
const optimizeJpg = () => {
  return src('src/**/*.{jpg,jpeg}')
    .pipe(imagemin([imageminGuetzli()]))
    .pipe(dest('dist/'))
}

// Copy remaining files to dist
const copy = () => {
  return src([
    'src/**/*.{pdf,htm,xml,txt,eot,ttf,woff,woff2,otf,ttf,php,css,js,json,map}',
    '!src/assets/_pre/**/*'
  ]).pipe(dest('dist/'))
}

// Watch
const watchFiles = () => {
  watch('src/**/*.html').on('change', browserSync.reload)
  watch('src/assets/_pre/sass/**/*.scss', scss)
  watch('src/assets/_pre/js/**/*.js', jsFiles)
  watch('node_modules/**/*', jsLibsWeb)
  watch('node_modules/**/*', jsLibsApp)
}

// Serve
const serve = () => {
  browserSync.init({
    server: {
      baseDir: './src/'
    }
  })

  watchFiles()
}

/**************** Gulp Commands ****************/

// Start
exports.start = serve

// Build
exports.build = parallel(scss, jsFiles, jsLibsWeb, jsLibsApp)

// Build Production
exports.default = series(
  clean,
  parallel(
    minifyHtml,
    scss,
    jsFiles,
    jsLibsWeb,
    jsLibsApp,
    generateSitemap,
    optimizeGif,
    optimizePng,
    optimizeJpg,
    copy
  )
)
