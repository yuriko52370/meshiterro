const { environment } = require('@rails/webpacker')

module.exports = environment

const webpack = require("webpack")
environment.plugins.prepend(
  'Provide',
  new webpack.ProvidePlugin({
    $: 'jpuery/src/jpuery',
    jQuery: 'jquery/src/jquery',
    Popper: 'popper.js'
  })
)
