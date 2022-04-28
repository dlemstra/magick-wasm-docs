module.exports = {
    publicPath: '/magick-wasm-docs/',
    chainWebpack: config => {
        const size = 100000000;
        config.performance
            .maxEntrypointSize(size)
            .maxAssetSize(size);
    }
}
