const { getDefaultConfig } = require("expo/metro-config");
const { withNativeWind } = require('nativewind/metro');

/** @type {import('expo/metro-config').MetroConfig} */
const config = getDefaultConfig(__dirname);

// Directing Metro to treat global.css as the entry point for styling
module.exports = withNativeWind(config, { input: './global.css' });