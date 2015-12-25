React = require 'react'
ReactDom = require 'react-dom'
$ = require 'jquery'
_ = require 'lodash'

Header = require './components/Header'
List = require './components/List'

App = React.createClass
  render: ->
    <div>
      <Header />
      <div id="pageContent">
        <List />
      </div>
    </div>

ReactDom.render <App />, $('#container')[0]
