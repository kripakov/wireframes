var webpack = require('webpack');

module.exports = {
  context: __dirname + '/js',
  entry: {
    AppProgressBar :'./AppProgressBar.js',
    BxSlider: './BxSlider.js',
    BxSliderService: './BxSliderService.js',
    BxSliderTeam: './BxSliderTeam.js',
    Common: './common.js',
    IsotopeGalleryOne: './IsotopeGalleryOne.js',
    IsotopeGalleryTwo: './IsotopeGalleryTwo.js',
    ProgressBar: './ProgressBar.js',
    RangeNumber: './RangeNumber.js'
  },
  watch: true,
  output: {
    path:     __dirname + '/public',
    publicPath: '/',
    filename: "[name].js"
  },

  watchOptions: {
    aggregateTimeout: 100
  },

  plugins: [
    new webpack.NoEmitOnErrorsPlugin()
  ]
};
