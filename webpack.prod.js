const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");


module.exports = {
  mode: 'production',
  output:{
      filename: 'main.[contenthash].js',
      clean: true
  },
  module: {
    rules: [
      {
        test: /\.html/i,
        loader: "html-loader",
        options: {
          minimize: false,
          sources: false
        },
      },
      {
        test: /\.css$/i,
        exclude: /styles\.html$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /styles\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              esModule: false,
              name: 'assets/[name].[ext]'
            },
          },
        ],
      },
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
    ],
  },
  optimization: {
    minimize: true,
    minimizer: [
      new CssMinimizerPlugin(),
      new TerserPlugin()],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: "./index.html",
      inject: 'body'
    }),
    new MiniCssExtractPlugin({
      filename: "[name].[contenthash].css",
      ignoreOrder: false,
    }),
    new CopyPlugin({
      patterns: [
        { from: "src/assets", to: "assets/" },
      ],
    }),
  ],
};
