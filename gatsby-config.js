module.exports = {
  siteMetadata: {
    title: "Nick",
    subtitle: "Meincken"
  },
  plugins: [
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Gatsby Storybook Starter",
        short_name: "Gatsby Storybook Starter",
        start_url: "/",
        background_color: "#ffffff",
        theme_color: "#744C9E",
        display: "standalone",
        icon: "src/assets/logos/icon.png",
      },
    },
    {
      resolve: "gatsby-plugin-google-fonts",
      options: {
        fonts: ["lato: 100,300,400,700,900"],
        display: "swap",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/assets/images`,
        name: "images",
      },
    },
    "gatsby-plugin-root-import",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-offline",
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    "gatsby-plugin-styled-components",
  ],
};
