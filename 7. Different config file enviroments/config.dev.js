const path = require("path");

module.exports = {
    mode: "development",
    entry: "./src/index.js",
    // CSS
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            }
        ]
    },
    // Run on development server
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 3500
    }
}