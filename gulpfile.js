const gulp = require('gulp');
const responsive = require('gulp-responsive');

gulp.task('responsiveImgs', () => {
  return gulp
    .src('src/images/*')
    .pipe(
      responsive(
        {
          '*.jpg': [
            {
              width: 400,
              rename: {
                suffix: '-400',
                extname: '.jpg',
              },
              format: 'jpg',
            },
            {
              width: 640,
              rename: {
                suffix: '-640',
                extname: '.jpg',
              },
              format: 'jpg',
            },
            {
              width: 800,
              rename: {
                suffix: '-800',
                extname: '.jpg',
              },
              format: 'jpg',
            },
            {
              width: 1024,
              rename: {
                suffix: '-1024',
                extname: '.jpg',
              },
              format: 'jpg',
            },
            {
              width: 1200,
              rename: {
                suffix: '-1200',
                extname: '.jpg',
              },
              format: 'jpg',
              // Do not enlarge the output image if the input image are already less than the required dimensions.
              withoutEnlargement: true,
            },
            {
              width: 1366,
              rename: {
                suffix: '-1366',
                extname: '.jpg',
              },
              format: 'jpg',
              // Do not enlarge the output image if the input image are already less than the required dimensions.
              withoutEnlargement: true,
            },
            {
              width: 1600,
              rename: {
                suffix: '-1600',
                extname: '.jpg',
              },
              format: 'jpg',
              // Do not enlarge the output image if the input image are already less than the required dimensions.
              withoutEnlargement: true,
            },
            {
              width: 1920,
              rename: {
                suffix: '-1920',
                extname: '.jpg',
              },
              format: 'jpg',
              // Do not enlarge the output image if the input image are already less than the required dimensions.
              withoutEnlargement: true,
            },
            {
              width: 400,
              rename: {
                suffix: '-400',
                extname: '.webp',
              },
            },
            {
              width: 640,
              rename: {
                suffix: '-640',
                extname: '.webp',
              },
            },
            {
              width: 800,
              rename: {
                suffix: '-800',
                extname: '.webp',
              },
            },
            {
              width: 1024,
              rename: {
                suffix: '-1024',
                extname: '.webp',
              },
            },
            {
              width: 1200,
              rename: {
                suffix: '-1200',
                extname: '.webp',
              },
              // Do not enlarge the output image if the input image are already less than the required dimensions.
              withoutEnlargement: true,
            },
            {
              width: 1366,
              rename: {
                suffix: '-1366',
                extname: '.webp',
              },
              // Do not enlarge the output image if the input image are already less than the required dimensions.
              withoutEnlargement: true,
            },
            {
              width: 1600,
              rename: {
                suffix: '-1600',
                extname: '.webp',
              },
              // Do not enlarge the output image if the input image are already less than the required dimensions.
              withoutEnlargement: true,
            },
            {
              width: 1920,
              rename: {
                suffix: '-1920',
                extname: '.webp',
              },
              // Do not enlarge the output image if the input image are already less than the required dimensions.
              withoutEnlargement: true,
            },
          ],
        },
        {
          // Global configuration for all images
          // The output quality for jpg, WebP and TIFF output formats
          quality: 80,
          // Use progressive (interlace) scan for JPEG and PNG output
          progressive: true,
          // Strip all metadata
          withMetadata: false,
          // Do not emit the error when image is enlarged.
          errorOnEnlargement: false,
        },
      ),
    )
    .pipe(gulp.dest('./src/images/responsive'));
});
