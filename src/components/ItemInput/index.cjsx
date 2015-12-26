React = require 'react'
events = require '../events'
actions = require './actions'
_ = require 'lodash'
$ = require 'jquery'

ItemInput = React.createClass
  componentDidMount: () ->
    events.on 'ADD_ITEM', () ->
      $('.item-input').val ''

  render: ->
    <input placeholder="please input some words ..." className="item-input" onKeyDown={actions.addItem} />

module.exports = ItemInput
