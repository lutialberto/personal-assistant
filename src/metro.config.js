const { getDefaultConfig } = require("expo/metro-config");

/** @type {import('expo/metro-config').MetroConfig} */
const config = getDefaultConfig(__dirname);

// expo-sqlite en web carga su motor (wa-sqlite) como .wasm y usa un Worker con
// SharedArrayBuffer. Sin esto, "expo start --web" no puede resolver el .wasm.
config.resolver.assetExts.push("wasm");
config.server.enhanceMiddleware = (middleware) => {
  return (req, res, next) => {
    res.setHeader("Cross-Origin-Embedder-Policy", "credentialless");
    res.setHeader("Cross-Origin-Opener-Policy", "same-origin");
    return middleware(req, res, next);
  };
};

module.exports = config;
