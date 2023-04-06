module.exports = {
  // async redirects() {
  //   return [
  //     {
  //       source: '/',
  //       destination: '/default',
  //       permanent: true,
  //     },
  //   ]
  // },

  images: {
    // remotePatterns: [
    //   {
    //     protocol: 'https',
    //     hostname: 'avatars.githubusercontent.com',
    //     port: '',
    //     pathname: '/**/**',
    //   },
    // ],
    domains: ['avatars.githubusercontent.com']
  },
  webpack(config, options) {
    config.module.rules.push({
      loader: '@svgr/webpack',
      issuer: /\.[jt]sx?$/,
      options: {
        prettier: false,
        svgo: true,
        svgoConfig: {
          plugins: [{
            name: 'preset-default',
            params: {
              override: {
                removeViewBox: false
              }
            }
          }],
        },
        titleProp: true,
      },
      test: /\.svg$/,
    });

    return config;
  },
};