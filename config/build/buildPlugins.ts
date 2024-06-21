import webpack, { Configuration, DefinePlugin } from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import {BuildOptions} from "./type/types";
import {BundleAnalyzerPlugin} from "webpack-bundle-analyzer";
import ForkTsCheckerWebpackPlugin from "fork-ts-checker-webpack-plugin";
import ReactRefreshWebpackPlugin from "@pmmmwh/react-refresh-webpack-plugin";


export function buildPlugins({platform, ...options}: BuildOptions): Configuration['plugins'] {
    const isDev = options.mode === 'development';
    const isProd = options.mode === 'production';

    const plugins: Configuration['plugins'] = [
        new HtmlWebpackPlugin({template: options.paths.html}),
        new DefinePlugin({
            __PLATFORM__:JSON.stringify(platform),
            __ENV__:JSON.stringify(options.mode),
        }),

    ]

    if (isDev) {
        plugins.push(new webpack.ProgressPlugin())
        /**move type checking into a separate process:
         makes building the project easier (faster) */
        plugins.push(new ForkTsCheckerWebpackPlugin({}))
        plugins.push(new ReactRefreshWebpackPlugin())
    }

    if (isProd) {
        plugins.push(new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash:8].css',
            chunkFilename: 'css/[name].[contenthash:8].css',
        }))

    }

    if(options.analyzer) {
        plugins.push(new BundleAnalyzerPlugin())
    }
    return plugins
}