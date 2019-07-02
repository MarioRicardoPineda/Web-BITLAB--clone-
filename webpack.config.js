
const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")

module.exports = {
    resolve: {
        modules: [
            'src/app',
            'node_modules',
        ],
    },

    entry: "./src/app/app.js",

    output: {
        path: path.resolve(__dirname + "/public"),
        filename: "js/main.js"
    },

    devServer: {
        port: 5000
    },

    module: {
        rules: [
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    "sass-loader"
                ]
            },
            {
                test: /\.(png|ico|gif|svg|jpe?g)(\?[a-z0-9]+)?$/,
                use: 'url-loader',
            },
            {
                test: /\.html$/,
                loader: 'html-loader'
            },
            {
                loader: "file-loader",
                use : [
                    {
                        options : {
                            name :'[name].[ext]'
                        }
                    }
                ],
                exclude : path.resolve(__dirname, './src/app/index.html')
            }
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/app/index.html" 
        }),
        new MiniCssExtractPlugin({
            filename: "css/[name]-style.css"
        })
    ],

}