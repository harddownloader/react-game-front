const path = require('path');
// const { CleanWebpackPlugin } = require('clean-webpack-plugin');
// const HtmlWebpackPlugin = require('html-webpack-plugin');
// const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  resolve: {
    extensions: ['.js'],
  },
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    compress: true,
    port: 3000,
  },
  entry: path.resolve(__dirname, 'src', 'index.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js', // 'build.js',
  },
  plugins: [
    // new CleanWebpackPlugin(),
    // new HtmlWebpackPlugin({
    //   template: path.resolve(__dirname, 'public/index.html'),
    //   // template: 'index.ejs', это для проставления места инжекта - https://github.com/jantimon/html-webpack-plugin#options
    //   // inject: 'body',

    //   /* minify: { это не нужно так как юзается альтернатива
    //     removeComments: devMode ? false : true,
    //     collapseWhitespace: devMode ? false : true
    //   }*/
    // }),
    // new CopyPlugin({
    //   patterns: [
    //     {
    //       // imgs
    //       from: path.resolve(__dirname, 'src/assets/img'),
    //       to: 'assets/images',
    //     },
    //     {
    //       // audio
    //       from: path.resolve(__dirname, 'src/assets/html'),
    //       to: 'assets/audio',
    //     },
    //     {
    //       // fonts
    //       from: path.resolve(__dirname, 'src/assets/fonts'),
    //       to: 'assets/fonts',
    //     },
    //   ],
    // }),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: [
          'babel-loader',
          // 'eslint-loader'
        ],
      },
      // {
      //   test: /\.ts(x?)$/,
      //   exclude: /node_modules/,
      //   use: [{ loader: 'ts-loader' }, { loader: 'eslint-loader' }],
      // },
      {
        test: /\.css$/,
        use: [{ loader: 'style-loader' }, { loader: 'css-loader' }],
      },
      {
        test: /\.scss$/,
        use: [
          { loader: "style-loader" },
          { loader: "css-loader" },
          { loader: "sass-loader" }
        ]
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif|eot|ttf|woff|woff2)$/i,
        use: ['file-loader'],
        include: path.join(__dirname, 'src/assets/')
      },
      {
        test: /\.mp3$/,
        include: path.join(__dirname, 'src/assets/'),
        loader: 'file-loader'
      },
      {
        enforce: 'pre',
        test: /\.js$/,
        loader: 'source-map-loader',
      },
    ],
  },
};
