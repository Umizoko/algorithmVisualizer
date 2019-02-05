//  モード値をproductionに設定すると最適化された状態で、
// 　developmentに設定するとソースマップが有効の状態で出力される
const MODE = 'production';

module.exports = {

    mode: MODE,

    // ローカル環境を立ち上げる
    // 実行時にブラウザが自動的にlocalhostを開く
    devServer: {
        contentBase: 'public',
        open: true
    },

    // mainとなるJavaScriptファイル（エントリーポイント）
    entry: `./src/js/index.js`,

    // fileの出力設定
    output: {
        // 出力ファイルのディレクトリ名
        path: `${__dirname}/public/`,
        // 出力ファイル名
        filename: 'bundle.js'
    },

    // source-map方式でないと、cssの元ソースが追跡できない
    devtool: 'source-map',

    // css-loaderの設定
    module: {
        rules: [{
                // Sass file version
                test: /\.scss/,
                use: [
                    // リンクタグを出力
                    'style-loader',
                    {
                        loader: 'css-loader',
                        // cssをバンドル
                        options: {
                            // urlメソッドの取り込みを許可
                            url: true,
                            // sourceMap
                            sourceMap: true,
                            // 空白文字とコメントを削除
                            minimize: true,
                            // postcss-loader, sass-loader
                            importLoaders: 2
                        },
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            sourceMap: true,
                            plugins: [
                                // autoprefixerの有効化
                                // ベンダープレフィックスを自動付加
                                require('autoprefixer')({
                                    grid: true
                                })
                            ]
                        }
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true
                        }
                    }
                ],
            },
            {
                // .jsにバンドルする
                test: /\.(gif|png|jpg|eot|wof|woff|ttf|svg)$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 100 * 1024,
                        name: '../assets/[name].[ext]'
                    }
                }]
            },
        ],
    },
};