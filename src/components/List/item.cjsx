React = require 'react'
_ = require 'lodash'


Item = React.createClass

  render: ->
    <li>
      <p>{this.props.title}</p>
      <p>
        <a onClick={_.bind this.props.onClick, this, this.props.id}>&times;</a>
      </p>
    </li>

module.exports = Item
