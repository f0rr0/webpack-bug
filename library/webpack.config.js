const { resolve } = require('path');

module.exports = (env = { dev: true }) => ({
    context: resolve(__dirname, './src'),
    entry: {
     library: env.prod ? './index.js' : ['webpack/hot/poll?1000', './index.js']
    },
    target: 'node',
    output: {
     filename: '[name].js',
     path: resolve(__dirname, './build'),
     pathInfo: !env.prod,
     libraryTarget: "commonjs2",
     library: "Foo"
    },
    devtool: env.prod ? 'source-map' : 'eval'
});
