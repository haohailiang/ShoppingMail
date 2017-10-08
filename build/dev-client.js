/* eslint-disable */
'use strict'
require('eventsource-polyfill')
const hotClient = require('webpack-hot-middleware/client?noInfo=true&reload=true')

hotClient.subscribe(function (event) {//热重载插件
  if (event.action === 'reload') {
    window.location.reload()
  }
})
