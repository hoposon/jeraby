const path = require('path')
module.exports = {
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'stylus',
      patterns: [
		path.resolve(__dirname, './src/styles/main.styl'),
	  ]
    }
  },
  devServer: {
	host: 'localhost'
  }
}
