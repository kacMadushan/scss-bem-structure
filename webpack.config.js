const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

module.exports = (env) => {
    const isProduction = env === 'production';
    const CSSExtract = new ExtractTextPlugin('styles.css');

    return {
        entry: ['@babel/polyfill', './src/index.js'],
        output: {
            path: path.join(__dirname, 'public', 'build'),
            filename: 'bundle.js',
        },
        module: {
            rules: [{
                loader: 'babel-loader',
                test: /\.(js|jsx)$/,
                exclude: /node_modules/
            }, {
                test: /\.s?css$/,
                use: CSSExtract.extract({
                    use: [
                        {
                            loader: 'css-loader',
                            options: {
                                sourceMap: true
                            }
                        },
                        {
                            loader: 'sass-loader',
                            options: {
                                sourceMap: true
                            }
                        }
                    ]
                })
            }]
        },
        plugins: [CSSExtract],
        devtool: isProduction ? 'source-map' : 'inline-source-map',
        devServer: {
            hot: true,
            contentBase: path.join(__dirname, 'public'),
            publicPath: '/build/'
        }
    }
}