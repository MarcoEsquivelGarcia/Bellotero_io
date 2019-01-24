var path = require("path");

var DIST_DIR = path.resolve(__dirname, "dist");
var SRC_DIR = path.resolve(__dirname, "src");

module.exports = {
    entry: SRC_DIR + "/index.js",
    output: {
        path: DIST_DIR ,
        filename: "bundle.js",
        publicPath: "/dist/"
    },
    module: {
       rules: [
           {
               test: /\.js$/,
               exclude: /node_modules/,
               use: {
                   loader: "babel-loader"
               }
           },
           {
               test: /\.(css|less)$/,
               use: ["style-loader", "css-loader"]
           },
           {
             test: /\.(png|jp(e*)g|svg)$/,
            use: [{
                loader: 'url-loader',
                options: {
                    limit: 8000, // Convert images < 8kb to base64 strings
                    name: 'img/[hash]-[name].[ext]'
                }
            }]
          },
          {
            test: /\.json$/,
            loader: 'json-loader',
            type: 'javascript/auto'
        }
       ]
   }
 };
