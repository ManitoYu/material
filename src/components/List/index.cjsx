React = require 'react'
_ = require 'lodash'

Item = require './item'

List = React.createClass

  getInitialState: ->
    data: [
      { id: 1, title: 'This is a title, one.' }
      { id: 2, title: 'This is a title, two.' }
      { id: 3, title: 'This is a title, three.' }
      { id: 4, title: 'This is a title, four.' }
    ]

  deleteItem: (id) ->
    index = _.indexOf @state.data, _.find(@state.data, id: id)
    @state.data.splice index, 1
    this.setState data: @state.data

  render: ->
    items = _.map @state.data, _.bind (item) ->
      <Item key={item.id} {...item} onClick={this.deleteItem} />
    , this

    <ul className="list">{items}</ul>

module.exports = List
