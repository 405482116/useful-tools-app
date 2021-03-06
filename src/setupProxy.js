const { createProxyMiddleware } = require("http-proxy-middleware");


module.exports = function (app) {
    app.use(
        createProxyMiddleware("/api/v2/**", {
            target: "http://localhost:4040/",
            changeOrigin: true
        })
    );
};