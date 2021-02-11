// @generated: @expo/next-adapter@2.1.55
// Learn more: https://github.com/expo/expo/blob/master/docs/pages/versions/unversioned/guides/using-nextjs.md#withexpo

const { withExpo } = require('@expo/next-adapter');

module.exports = withExpo({
  projectRoot: __dirname,
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
    })

    return config
  },
  // module: {
  //   rules: [
  //     {
  //       test: /\.(png|jpe?g|gif)$/i,
  //       use: [
  //         {
  //           loader: 'file-loader',
  //         },
  //       ],
  //     },
  //   ],
  // },
});
