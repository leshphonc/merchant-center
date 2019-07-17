const { override, addWebpackAlias, addWebpackExternals } = require('customize-cra')
const path = require('path')

module.exports = override(
  addWebpackAlias({
    '@': path.resolve(__dirname, 'src'),
  }),
  addWebpackExternals({
    BMap: 'BMap',
    BMapLib: 'BMapLib',
  }),
)
