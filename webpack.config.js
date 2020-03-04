const path = require("path");
module.exports = {
    entry: "./src/index.js",
    output: {
        filename: "app.boundle.js",
        path: path.resolve(__dirname, "dist")
    }
}
