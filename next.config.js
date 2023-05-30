const withPlugins = require("next-compose-plugins");
const withLess = require("next-with-less");

module.exports = withPlugins([
  withLess({
    lessLoaderOptions: {
      lessOptions: {
        modifyVars: {
          "@primary-color": "#3d3dc3",
          "@link-color": "#262626",
          "@text-color": "#262626",
        },
        javascriptEnabled: true,
      },
    },
  }),
]);
