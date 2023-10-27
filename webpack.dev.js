const { merge } = require('webpack-merge');
const config = require('./webpack.config.js');

module.exports = merge(config, {
  mode: 'development',
  devServer: {
    static: './dist',
    //open: true,		//после запуска сервера сразу же откроется хтмл страница (если хочешь)
    hot: true,			//изменения без необходимости полного перезапуска
    port: 3001,			// можно поменять порт локал хоста
    //clientLogLevel: 'error', // или 'silent' для полного отключения логов
  },
});
