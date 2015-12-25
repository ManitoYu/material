React = require 'react'
_ = require 'lodash'

List = React.createClass
  render: ->

    items = _.map this.props.data, (item) ->
      <li key={item.id}>{item.title}</li>

    <ul className="list">{items}</ul>

module.exports = List
