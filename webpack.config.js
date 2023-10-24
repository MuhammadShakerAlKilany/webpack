const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");

module.exports = {
    mode: "development",
    entry: {
        app: path.resolve(__dirname, "src/index"),
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name].[contenthash].js",
        clean: true,
        assetModuleFilename: "[name][ext]"

    },
    devServer: {
        static: {
            directory: path.resolve(__dirname, "dist")
        },
        port: 3050,
        open: true,
        hot: true,
        compress: true,
        historyApiFallback: true,
    },
    module: {
        rules: [{
            test: /\.scss$/i,
            use: ["style-loader", "css-loader", "sass-loader"],
        },
        {
            test: /\.hbs$/,
            use: 'handlebars-loader',
        },{
            test:/\.(png|svg|jpg|jpeg|gif)$/i,
            use: ['file-loader']
        }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "Hello",
            fullName:"Muhammad Shaker AlKilany",
            filename: "index.html",
            template: "./src/template.hbs"
        }),
        //    new BundleAnalyzerPlugin()
    ],
}