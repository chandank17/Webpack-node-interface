# Webpack node interface.

webpack provides a Node.js API which can be used directly in Node.js runtime.


The Node.js API is useful in scenarios in which you need to customize the build or development process since all the reporting and error handling must be done manually and webpack only does the compiling part. For this reason the stats configuration options will not have any effect in the webpack() call.

Installation

To start using the webpack Node.js API, first install webpack if you haven’t yet:

``npm install --save-dev webpack``

Then require the webpack module in your Node.js script:

``const webpack = require('webpack');``
Or if you prefer ES2015:

``import webpack from 'webpack';``


## webpack()

 The imported webpack function is fed a webpack Configuration Object and runs the webpack compiler if a callback function is provided:

```js
const webpack = require('webpack');

webpack({
  // [Configuration Object](/configuration/)
}, (err, stats) => { // [Stats Object](#stats-object)
  if (err || stats.hasErrors()) {
    // [Handle errors here](#error-handling)
  }
  // Done processing
});
```

