'use strict'

var map = require('@atomic-app/map-obj')
var snakeCase = require('to-snake-case')

module.exports = function (obj) {
  return map(obj, function (key, val) {
    return [snakeCase(key), val]
  }, {deep: true})
}
