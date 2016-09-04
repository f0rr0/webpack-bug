const { resolve } = require('path');

module.exports = (env = { dev: true }) => ({
    context: resolve(__dirname),
    entry: {
     main: env.prod ? './index.js' : ['webpack/hot/poll?1000', './index.js']
    },
    target: 'node',
    output: {
     filename: '[name].build.js',
     path: resolve(__dirname),
     pathInfo: !env.prod,
    },
    devtool: env.prod ? 'source-map' : 'eval'
});
