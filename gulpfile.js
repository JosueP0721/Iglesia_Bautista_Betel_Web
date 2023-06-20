const {src, dest, watch, parallel} = require('gulp');

// CSS

const sass = require('gulp-sass')(require('sass'));
const plumber = require('gulp-plumber');
const cssnano = require('cssnano');
const autoprefixer = require('autoprefixer');
const sourcemaps = require('gulp-sourcemaps');
const postcss = require('gulp-postcss');

// Images

const cache = require('gulp-cache');
const imagemin = require('gulp-imagemin');
const webp = require('gulp-webp');
const avif = require('gulp-avif');

function css(done) {

    src('src/scss/**/*.scss')
        .pipe(plumber())
        .pipe(sourcemaps.init())
        .pipe(sass({outputStyle: 'compressed'}))
        .pipe(postcss([autoprefixer(), cssnano()]))
        .pipe(sourcemaps.write())
        .pipe(dest('build/css'))

    done();
}

function js() {

    return src('src/js/**/*.js')
            .pipe(dest('build/js'))
}

function video() {

    return src('src/video/**/*.mp4')
            .pipe(dest('build/video'))
}

function images() {

    return src('src/img/**/*.svg')
            .pipe(dest('build/img'))
} 

function optimages () {

    return src('src/img/**/*.{png,jpg}')
            .pipe(cache(imagemin({optimizationLevel: 3})))
            .pipe(dest('build/img'))
}

function convertWebp() {

    const options = {
        quality: 50
    }
    return src('src/img/**/*.{png,jpg}')
            .pipe(webp(options))
            .pipe(dest('build/img'))
}

function convertAvif() {

    const options = {
        quality: 50
    }
    return src('src/img/**/*.{png,jpg}')
            .pipe(avif(options))
            .pipe(dest('build/img'))
}

function dev(done) {

    watch('src/scss/**/*.scss', css);
    watch('src/js/**/*.js', js);
    watch('src/img/**/*', optimages, images, convertWebp, convertAvif);
    watch('src/video/**/*.mp4', video);

    done();
}

exports.css = css;
exports.js = js;
exports.optimages = optimages;
exports.images = images;
exports.convertWebp = convertWebp;
exports.convertAvif = convertAvif;
exports.dev = parallel(css, js, optimages, images, convertWebp, convertAvif, dev);
