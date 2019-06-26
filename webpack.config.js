
const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")

module.exports = {
    entry: "./src/app/app.js",
    output : {
        path: path.resolve(__dirname + "/public"),
        filename: "js/main.js" 
    },

    devServer : {
        port : 5000
    },

    module : {
        rules : [
            {
                test : /\.(sa|sc|c)ss$/,
                use : [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    "sass-loader"
                ]
            },
            {
                test : /\.(png|jpe?g|gif|svg)$/,
                use : [
                    {
                        loader : "file-loader",
                        options : {
                            name : '[name].[ext]',
                            outputPath : 'assets/img/',
                            useRelativePath : true
                        }
                    }

                ]
            }
        ]
    },

    plugins : [
        new HtmlWebpackPlugin({
            template : "./src/app/index.html"
        }),
        new MiniCssExtractPlugin({
            filename : "css/[name]-style.css"
        })        
    ],
    
}