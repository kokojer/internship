
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const isDevelopment = process.env.npm_lifecycle_event === 'serve';
const isProduction = !isDevelopment;
require('dotenv').config()
console.log(process.env.npm_lifecycle_event)
module.exports = {
  mode: isProduction ? 'production' : 'development',
  entry:'./src/index.js',
  devtool: isDevelopment ? 'eval-source-map' :  false,
  output: {
    publicPath: isProduction ? './' : '/',
    filename: 'index.bundle.js',
    environment: {
      arrowFunction: false,
      bigIntLiteral: false,
      const: false,
      destructuring: false,
      dynamicImport: false,
      forOf: false,
      module: false,
    }
  },
  //webpack 5 comes with devServer which loads in development mode
  devServer: {
    port: 3000,
    static: '/dist',
    historyApiFallback: true,
    // watchContentBase: true,
    hot: true,

  },
  //Rules of how webpack will take our files, complie & bundle them for the browser 
  module: {
    rules: [
      {
        test: /\.(m?js|jsx|ts)$/,
        use: {
          loader: 'babel-loader',
          options:{
            presets:['@babel/preset-env'],
            plugins: ["babel-plugin-transform-object-assign"]
          }
        },
      },
      {
        test: /\.(c|sa|sc)ss$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader','sass-loader']
      },
      // static files
      {
        test: /\.(jpe?g|png|gif|svg|eot|ttf|woff2?)$/i,
        type: 'asset'
      }
    ]
  },
  resolve: {
    extensions: ['.mjs', '.js', '.jsx', '.ts', '.tsx', '.json']
  },
  plugins: [new HtmlWebpackPlugin({ template: './public/index.html' }), new MiniCssExtractPlugin()],
}