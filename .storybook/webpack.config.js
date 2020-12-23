const path = require("path");
const createCompiler = require("@storybook/addon-docs/mdx-compiler-plugin");

module.exports = async ({ config }) => {
  devtool: "source-map";
  const rules = config.module.rules;
  const assetRule = rules.find((rule) => rule.test.test(".svg"));
  addons: ["@storybook/addon-docs/register"],
    // Transpile Gatsby module because Gatsby includes un-transpiled ES6 code.
    (rules[0].exclude = [/node_modules\/(?!(gatsby)\/)/]);

  rules[0].include = require("path").resolve("../..");
  // use installed babel-loader which is v8.0-beta (which is meant to work with @babel/core@7)
  rules[0].use[0].loader = require.resolve("babel-loader");

  // use @babel/preset-react for JSX and env (instead of staged presets)
  rules[0].use[0].options.presets = [
    require.resolve("@babel/preset-react"),
    require.resolve("@babel/preset-env"),
  ];

  rules[0].use[0].options.plugins = [
    // use @babel/plugin-proposal-class-properties for class arrow functions
    require.resolve("@babel/plugin-proposal-class-properties"),
    // use babel-plugin-remove-graphql-queries to remove static queries from components when rendering in storybook
    require.resolve("babel-plugin-remove-graphql-queries"),
  ];

  // Prefer Gatsby ES6 entrypoint (module) over commonjs (main) entrypoint
  config.resolve.mainFields = ["browser", "module", "main"];

  assetRule.exclude = /\.svg$/;

  const assetLoader = {
    loader: assetRule.loader,
    options: assetRule.options || assetRule.query,
  };

  rules.push({
    test: /\.svg$/,
    include: path.resolve(__dirname, "../"),
    use: ["@svgr/webpack"],
  });

  rules.push({
    test: /\.(png|woff|woff2|eot|ttf|svg)$/,
    use: [
      {
        loader: "file-loader",
        query: {
          name: "static/media/[name].[ext]",
        },
      },
    ],
    include: path.resolve(__dirname, "./"),
  });

  rules.push({
    test: /\.(stories|story)\.mdx$/,
    use: [
      {
        loader: "babel-loader",
        options: {
          plugins: ["@babel/plugin-transform-react-jsx"],
        },
      },
      {
        loader: "@mdx-js/loader",
        options: {
          compilers: [createCompiler({})],
        },
      },
    ],
  });

  rules.push({
    test: /\.(stories|story)\.[tj]sx?$/,
    loader: require.resolve("@storybook/source-loader"),
    exclude: [/node_modules/],
    enforce: "pre",
  });

  config.resolve.alias["~/images"] = path.resolve(
    __dirname,
    "../static/images"
  );
  config.resolve.alias["~/img"] = path.resolve(__dirname, "../static/img");
  config.resolve.alias["~/fonts"] = path.resolve(__dirname, "../static/fonts");
  config.resolve.alias["~/icons"] = path.resolve(__dirname, "../static/icons");
  config.resolve.alias["~/shared"] = path.resolve(__dirname, "../src/shared");
  config.resolve.alias["~/global"] = path.resolve(__dirname, "../src/global");
  config.resolve.alias["~/context"] = path.resolve(__dirname, "../src/context");
  config.resolve.alias["~/src"] = path.resolve(__dirname, "../src");
  config.resolve.alias["~/provider"] = path.resolve(
    __dirname,
    "../src/provider"
  );
  config.resolve.alias["~/components"] = path.resolve(
    __dirname,
    "../src/components"
  );

  return config;
};
