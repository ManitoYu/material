React = require 'react'
ReactDom = require 'react-dom'
$ = require 'jquery'
_ = require 'lodash'

Header = require './components/Header'
List = require './components/List'

App = React.createClass

  getInitialState: ->
    data: [
      { id: 1, title: 'This is a title, one.' }
      { id: 2, title: 'This is a title, two.' }
      { id: 3, title: 'This is a title, three.' }
      { id: 4, title: 'This is a title, four.' }
    ]

  render: ->
    <div>
      <Header />
      <List data={this.state.data} />
    </div>

ReactDom.render <App />, $('#container')[0]
