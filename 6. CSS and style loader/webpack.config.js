const path = require("path");

module.exports = {
    mode: "production",
    entry: "./src/index.js",
    // Entry point and output file
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "output.js"
    },
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