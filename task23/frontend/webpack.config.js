import { resolve, dirname } from "path";
import { fileURLToPath } from "url";
import webpackPkg from "webpack";
import dotenv from "dotenv";
import HtmlWebpackPlugin from "html-webpack-plugin";
import CopyPlugin from "copy-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

const { DefinePlugin } = webpackPkg;

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default (env, argv) => {
    const envVars = dotenv.config().parsed || {};
    const envKeys = Object.keys(envVars).reduce((acc, key) => {
        acc[`process.env.${key}`] = JSON.stringify(envVars[key]);
        return acc;
    }, {});

    const mode = process.env.MODE || argv.mode || "development";
    const isProd = mode === "production";

    return {
        mode,
        entry: resolve(__dirname, "src/app.js"),
        devtool: !isProd ? "source-map" : false,
        output: {
            path: resolve(__dirname, "dist"),
            filename: "[name].[contenthash].js",
            clean: true,
        },
        devServer: {
            devMiddleware: {
                writeToDisk: false,
            },
            static: resolve(__dirname, "dist"),
            compress: true,
            port: 3000,
            hot: true,
        },
        module: {
            rules: [
                {
                    test: /\.(?:js|mjs|cjs)$/,
                    exclude: /node_modules/,
                    use: {
                        loader: "babel-loader",
                        options: {
                            presets: ["@babel/preset-env"],
                            plugins: ["@babel/plugin-transform-runtime"],
                        },
                    },
                },
                {
                    test: /\.s[ac]ss$/i,
                    exclude: /node_modules/,
                    use: [
                        MiniCssExtractPlugin.loader,
                        {
                            loader: "css-loader",
                            options: {
                                sourceMap: true,
                            },
                        },
                        {
                            loader: "sass-loader",
                            options: {
                                sassOptions: {
                                    style: `compressed`,
                                    sourceMap: true,
                                    quietDeps: true,
                                },
                            },
                        },
                    ],
                },
                {
                    test: /\.(jpe?g|png|gif|svg)$/,
                    type: "asset",
                },
            ],
        },
        optimization: {
            chunkIds: "named",
            splitChunks: {
                chunks: "all",
            },
        },
        plugins: [
            new HtmlWebpackPlugin({
                title: "Webpack lesson",
                minify: true,
                template: resolve(__dirname, "src/view/index.html"),
                favicon: resolve(__dirname, "src/public/favicon-32x32.png"),
                meta: {
                    charset: "UTF-8",
                    viewport:
                        "width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0",
                    "http-equiv": "X-UA-Compatible",
                },
            }),
            new MiniCssExtractPlugin({
                filename: "[name].[contenthash].css",
            }),
            new CopyPlugin({
                patterns: [
                    {
                        from: resolve(__dirname, "src", "public"),
                        to: resolve(__dirname, "dist"),
                    },
                ],
            }),
            new DefinePlugin(envKeys),
        ],
    };
};