// webpack.mix.js
let mix = require('laravel-mix');

//Styles
mix.webpackConfig({
    stats: { children: true },
});
mix.sass('scss/style.scss', './style.css').setPublicPath('.');