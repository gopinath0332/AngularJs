var debug = process.env.NODE_ENV !== "production";
// var debug = false;
var webpack = require('webpack');
var path = require('path');
const PATHS = {
    app: path.join(__dirname),
    build: path.join(__dirname),
};
module.exports = {
    context: PATHS.app,
    entry: PATHS.app + "/js/index.js",
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /(node_modules|bower_components)/,
            loader: 'babel', // 'babel-loader' is also a legal name to reference
            query: {
                presets: ['es2015']
            }
        }, {
            test: /\.css$/,
            loader: "style!css"
        }, {
            test: /\.(woff|woff2|eot|ttf|svg)$/,
            loader: 'url'
        }]
    },
    output: {
        path: PATHS.build,
        filename: "app.js"
    },
    devServer: {

        contentBase: path.join(__dirname),

        inline: true,

        hot: true,
        // Enable history API fallback so HTML5 History API based
        // routing works. This is a good default that will come
        // in handy in more complicated setups.

        historyApiFallback: false,

        progress: true,

        // Display only errors to reduce the amount of output.
        stats: 'errors-only',

        // Parse host and port from env so this is easy to customize.
        host: process.env.HOST,
        port: process.env.PORT

    },
    plugins: [new webpack.HotModuleReplacementPlugin(),
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"
        })
    ]
};