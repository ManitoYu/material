React = require 'react'
_ = require 'lodash'

Item = require './item'
actions = require './actions'
events = require '../events'
store = require './store'

List = React.createClass
  getInitialState: ->
    data: []

  componentDidMount: () ->
    self = this
    events.on 'GET_ITEMS', (data) ->
      self.setState data: data

    events.on 'DELETE_ITEM', (id) ->
      index = _.indexOf self.state.data, _.find(self.state.data, id: id)
      self.state.data.splice index, 1
      self.setState data: self.state.data

    events.on 'ADD_ITEM', (item) ->
      self.state.data.push item
      self.setState data: self.state.data

    store.getItems()

  render: ->
    items = _.map @state.data, _.bind (item) ->
      <Item key={item.id} {...item} onClick={actions.deleteItem} />
    , this

    <ul className="list">{items}</ul>

module.exports = List
