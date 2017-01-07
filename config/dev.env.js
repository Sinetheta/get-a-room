var merge = require('webpack-merge')
var base = require('./base.env')

module.exports = merge(base, {
  NODE_ENV: '"development"'
})
