module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./src'], // Base directory for absolute paths
          alias: {
            '@': './src', // Alias for absolute paths
          },
        },
      ],
    ],
  };
};
