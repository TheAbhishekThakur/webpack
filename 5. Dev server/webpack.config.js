const path = require("path");

module.exports = {
    mode: "production",
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "output.js"
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 3500
    }
}