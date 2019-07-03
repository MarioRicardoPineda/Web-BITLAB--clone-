
const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")


const HWPlugin = new HtmlWebpackPlugin({
    template: "./src/app/index.html" 
});

let paginas = ['cursos', 'becas', 'eventos', 'aliados']

let multiplesFiles = paginas.map(entryName => {
    return new HtmlWebpackPlugin({
      filename: entryName + '.html',
      template: __dirname + `/src/app/${entryName}.html`
  })
})

module.exports = {
    resolve: {
        modules: [
            'src/app',
            'node_modules',
        ],
    },

    entry: {
        app : [
            "@babel/polyfill",
            "./src/app/app.js" 
        ]
    },

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
                test: /\.js$/, 
                exclude: /node_modules/, 
                loader: "babel-loader" 
            }
        ]
    },

    plugins: [
        new MiniCssExtractPlugin({
            filename: "css/[name]-style.css"
        }),
        HWPlugin
    ].concat(multiplesFiles)

}