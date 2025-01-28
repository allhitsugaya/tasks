import { resolve, dirname } from "path";
import { fileURLToPath } from "url";
import ImageMinimizerPlugin from "image-minimizer-webpack-plugin";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default (env, { mode = "development" }) => {
  const isProd = mode === "production";

  return {
    mode,
    entry: resolve(__dirname, "src", "index.js"),
    devtool: !isProd ? "source-map" : false,
    output: {
      path: resolve(__dirname, 'dist'),
      filename: "index.js",
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
            options: {
              presets: ['@babel/preset-env'],
              plugins: [`@babel/plugin-transform-runtime`]
            }
          }
        },
        {
          test: /\.css$/,
          exclude: /node_modules/,
          use: ["style-loader", { loader: "css-loader", options: { sourceMap: !isProd } }]
        },
        {
          test: /\.s[ac]ss$/,
          exclude: /node_modules/,
          use: [
            "style-loader",
            { loader: "css-loader", options: { sourceMap: !isProd } },
            {
              loader: "sass-loader", options: {
                sourceMap: !isProd,
                sassOptions: { outputStyle: "compressed" }
              }
            }
          ]
        }
      ]
    },
    plugins: [
      new ImageMinimizerPlugin({
        test: /\.(jpe?g|png|gif|svg)$/i,
        minimizer: {
          implementation: ImageMinimizerPlugin.imageminGenerate,
          options: {
            plugins: [
              ['mozjpeg', { quality: 70 }],
              ['pngquant', { quality: [0.65, 0.9] }],
              ['svgo', { plugins: [{ removeViewBox: false }] }]
            ]
          }
        }
      })
    ],
    optimization: {
      splitChunks: {
        chunks: 'async',
        minSize: 20000,
        minRemainingSize: 0,
        minChunks: 1,
        maxAsyncRequests: 30,
        maxInitialRequests: 30,
        enforceSizeThreshold: 50000,
        cacheGroups: {
          defaultVendors: {
            test: /[\\/]node_modules[\\/]/,
            priority: -10,
            reuseExistingChunk: true,
          },
          default: {
            minChunks: 2,
            priority: -20,
            reuseExistingChunk: true,
          },
        },
      },
    },
  };
};
