const paths = require("./paths");
//const EsmWebpackPlugin = require("@purtuga/esm-webpack-plugin");

module.exports = {
  mode: "production",
  // Where webpack looks to start building the bundle
  // entry: {
  //   box: paths.src + "/Box.jsx",
  //   button: paths.src + "/Button.jsx",
  // },

  entry: [paths.src + "/index.js"],

  // Where webpack outputs the assets and bundles
  output: {
    libraryTarget: "module",
  },

  // Determine how modules within the project are treated
  module: {
    rules: [
      // JavaScript: Use Babel to transpile JavaScript files
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [["@babel/preset-env", { modules: false }]],
            plugins: ["@babel/plugin-proposal-class-properties"],
          },
        },
      },
    ],
  },

  externals: {
    react: "commonjs2 react",
  },

  experiments: {
    outputModule: true,
  },
  //plugins: [new EsmWebpackPlugin()],
};
