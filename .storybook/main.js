module.exports = {
  stories: ["../packages/**/stories/*.stories.tsx"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-storysource",
    "@storybook/addon-a11y",
  ],
  framework: "@storybook/react",
  reactOptions: {
    fastRefresh: true,
    strictMode: true,
  },
  webpackFinal: async (config, { configType }) => {
    config.module.rules.push({
      type: "javascript/auto",
      test: /\.mjs$/,
      include: /node_modules/,
    })
    return config
  },
}
