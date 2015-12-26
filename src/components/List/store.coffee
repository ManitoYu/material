$ = require 'jquery'
events = require '../events'

module.exports =
  getItems: () ->
    $.ajax
      url: '/api/lists'
      type: 'GET'
      dataType: 'json'
    .done (res) ->
      events.emit 'GET_ITEMS', res.data

  deleteItem: (id) ->
    $.ajax
      url: "/api/lists/#{id}"
      type: 'DELETE'
      dataType: 'json'
    .done (res) ->
      events.emit 'DELETE_ITEM', id

  addItem: (text) ->
    $.ajax
      url: '/api/lists'
      type: 'POST'
      dataType: 'json'
      data:
        text: text
    .done (res) ->
      events.emit 'ADD_ITEM', res.data
