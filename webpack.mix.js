const mix = require('laravel-mix');
const { VueLoaderPlugin } = require('vue-loader');

mix.js('resources/js/app.js', 'public/js')
   .vue({ version: 3 })
   .sass('resources/sass/app.scss', 'public/css')
   .webpackConfig({
       plugins: [new VueLoaderPlugin()]
   });
