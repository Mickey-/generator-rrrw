
import React, { Component } from 'react'
import TodoTextInput from '../TodoTextInput'
import { Link } from 'react-router'

class Header extends Component {
  handleSave(text) {
    if (text.length) {
      this.props.addTodo(text)
    }
  }

  render() {
    return (
      <header>
        <h1>TODOS</h1>
        <img src="/assets/592.png"/>
        <Link to="/" style={{marginRight:"30px"}}>home</Link>
        <img src="/assets/592.png"/>
        <Link to="/header">header</Link>
        <TodoTextInput
          newTodo
          onSave={::this.handleSave}
          placeholder="What needs to be done?" />
      </header>
    )
  }
}

export default Header
