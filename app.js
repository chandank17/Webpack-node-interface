// Packages
const express = require('express');
const webpack = require('webpack'); // Webpack package to trigger bundle manualy in node. This is called as node webpack interface (Works same as Webpack CLI)

const middleware = require("webpack-dev-middleware"); //An express-style development middleware for use with webpack bundles and allows for serving of the files emitted from webpack. This should be used for development only.
// No files are written to disk, rather it handles files in memory
// This is only for development not for production


const webpackHotMiddleWare = require("webpack-hot-middleware");
// Middleware for hot reloading webpack. It detects changes and runs webpack to build bundles 

//variables
const app = express();
const webDevConfig = require('./webpack/webpack-dev.js');
const compiler = webpack(webDevConfig);

//Middlewares
app.use(middleware(compiler, {}));
app.use(webpackHotMiddleWare(compiler));



//Routes
app.get('/', (req, res) => {
    fs.readFile(__dirname + '/build/index.html', (err, html) => {
        res.send(ejs.render(html))
    })
})

//Listen
app.listen(8081, () => {
    console.log('Server listening at port 8081');
})
