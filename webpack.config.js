const { withExpo } = require("@expo/webpack-config");

module.exports = async function (env, argv) {
  const config = await withExpo(env, argv);
  config.output.publicPath = "/Spotlight/";
  return config;
};
