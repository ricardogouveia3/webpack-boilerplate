const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const AutoPrefixer = require('autoprefixer');

module.exports = {
  entry: "./index.js",
  output: {
    path: __dirname,
    filename: "public/js/index.min.js"
  },

  module: {
    rules: [
      { test: /\.html$/, use: [{ loader: "html-loader", options: { minimize: true } }] },
      { test: /\.sass$/, use: [ MiniCssExtractPlugin.loader, "css-loader", "postcss-loader", "sass-loader" ] },
      { test: /\.(png|jpe?g)/i, use: [{ loader: "url-loader", options: { name: "./img/[name].[ext]", limit: 10000 }}, { loader: "img-loader" }] },
    ],
  },

  plugins: [
    new HtmlWebPackPlugin({
      template: "pug/index.html",
      filename: "public/index.html"
    }),
    new MiniCssExtractPlugin({
      filename: "public/assets/css/[name].css",
      chunkFilename: "[id].css"
    })
  ]
};

// CSS output needs to be minified
// JS files should be in js/ [and index.min.js should be in public/js]*
// images are in assets/img/** and optmized versions needs to be in public/assets/img --> https://goo.gl/xF5sxV
// Server needs to run from public/ where index.html is
// Missing pug config --> https://goo.gl/Fp1m6Q

// --> https://goo.gl/2NJcFY
// --> https://goo.gl/qBEPsa