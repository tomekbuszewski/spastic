const cfg = require("../../gatsby-config");

module.exports = ({ config }) => {
  const resolver = cfg.plugins.find(item => item.resolve === "gatsby-plugin-alias-imports").options.alias;

  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    use: [
      {
        loader: require.resolve('ts-loader'),
      },
    ],
  });
  config.resolve.extensions.push('.ts', '.tsx');

  config.resolve = {
    ...config.resolve,
    alias: {
      ...config.resolve.alias,
      ...resolver,
    }
  };

  return config;
};