module.exports = {
    entry: [
        './src/index.js'
    ],
    modulue: {
        loaders: [{
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
        }]
    },
    resolve:{
        extensions: ['','.js','.jsx']
    },
    output: {
        path: __dirname + '/dist/',
        publicPath: '/',
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: './dist/'
    }
};