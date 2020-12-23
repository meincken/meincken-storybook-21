module.exports = {
  stories: [
    "../src/**/*.stories.@(js|mdx)",
  ],
  addons: [
    "@storybook/addon-actions/register",
    "@storybook/addon-links/register",
    "@storybook/addon-viewport/register",
    "@storybook/addon-knobs/register",
    "@storybook/addon-docs/register",
    "@storybook/addon-controls",
  ],
};
