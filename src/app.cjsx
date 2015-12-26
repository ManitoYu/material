React = require 'react'
ReactDom = require 'react-dom'
$ = require 'jquery'
_ = require 'lodash'

Header = require './components/Header'
List = require './components/List'
ItemInput = require './components/ItemInput'

App = React.createClass
  render: ->
    <div>
      <Header />
      <div id="pageContent">
        <ItemInput />
        <List />
      </div>
    </div>

ReactDom.render <App />, $('#container')[0]
