store = require '../List/store'
$ = require 'jquery'

module.exports =
  addItem: (ev) ->
    store.addItem $('.item-input').val() if ev.keyCode is 13
