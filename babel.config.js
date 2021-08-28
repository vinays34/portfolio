// @generated: @expo/next-adapter@2.1.55
// Learn more: https://github.com/expo/expo/blob/master/docs/pages/versions/unversioned/guides/using-nextjs.md#shared-steps

module.exports = function(api) {
    api.cache(true);
    return {
      presets: ['babel-preset-expo'],
      env: {
        production: {
          plugins: ['react-native-paper/babel'],
        },
      },
    };
  };
