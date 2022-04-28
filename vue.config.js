module.exports = {
    publicPath: '/magick-wasm-docs/',
    chainWebpack: config => {
        const size = 100000000;
        config.performance
            .maxEntrypointSize(size)
            .maxAssetSize(size);
    },
    configureWebpack: {
        resolve: {
            fallback: {
                "buffer": false,
                "child_process": false,
                "crypto": require.resolve("crypto-browserify"),
                "fs": false,
                "path": require.resolve("path-browserify"),
                "stream": require.resolve("stream-browserify")
            }
        }
    }
}
