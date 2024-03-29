module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          root: ["./src"],
          alias: {
            "@assets": "./src/assets",
            "@contexts": "./src/contexts",
            "@components": "./src/components",
            "@routes": "./src/routes" /*  */,
            "@screens": "./src/screens",
            "@storage": "./src/screens",
            "@utils": "./src/utils",
            "@types": "./src/@types",
          },
        },
      ],
    ],
  };
};
