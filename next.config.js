const withNextra = require('nextra')('nextra-theme-blog', './theme.config.js')

module.exports = withNextra({
  pageExtensions: ['jsx', 'js', 'md', 'mdx'],
  generateEtags: false,
  webpack: (config, options) => {
    config.resolve.alias = {
        ...config.resolve.alias,}
    config.module.rules.push({
      test: /\.md$/,
      use: 'raw-loader',
    })
    return config
  },
  env: {
    customKey: 'value',
  },
})