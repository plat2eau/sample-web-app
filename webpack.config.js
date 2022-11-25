const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const port = process.env.PORT || 3000;

module.exports = {
    mode: 'development',
    entry: {
        index: './src/index.tsx',
    },
    devtool: 'inline-source-map',
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
            favicon: './public/favicon.ico'
        }),
    ],
    module: {
        rules: [
            {
                test: /\.(js)$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.(s(a|c)ss)|(.css)$/,
                include: path.resolve(__dirname, 'src'),
                use: [{
                    loader: 'style-loader'
                }, {
                    loader: 'css-modules-typescript-loader'
                }, {
                    loader: 'css-loader',
                    options: {
                        modules: {
                            exportLocalsConvention: 'camelCase'
                        },
                        sourceMap: true
                    }
                }, {
                    loader: 'postcss-loader'
                }, {
                    loader: 'sass-loader'
                }],
            }
        ],
    },
    devServer: {
        host: 'localhost',
        static: {
            directory: path.resolve(__dirname, 'dist'),
        },
        port: port,
        open: true,
        hot: true,
        compress: true,
        historyApiFallback: true,
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.css', '.scss'],
    },
    output: {
        filename: '[name].bundle.[hash].js',
        path: path.resolve(__dirname, 'dist'),
        clean: true
    },
};