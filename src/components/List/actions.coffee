store = require './store'
_ = require 'lodash'

module.exports =
  deleteItem: (id) -> store.deleteItem id
