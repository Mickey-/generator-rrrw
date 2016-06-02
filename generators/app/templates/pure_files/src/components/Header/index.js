import React, { Component } from 'react'
import TodoTextInput from '../TodoTextInput'
import { Link } from 'react-router'
import img59 from '../../assets/59.png'
import img592 from '../../assets/592.png'

class Header extends Component {
  handleSave(text) {
    if (text.length) {
      this.props.addTodo(text)
    }
  }

  render() {
    const style = {
      marginRight: "30px"
    }
    return (
      <header>
        <h1>
          <img src={img59} height="50"/>
          TODOS
          <img src={img592}/>
        </h1>
        <Link to="/" style={style}>home</Link>
        <Link to="/routetest" style={style}>routetest</Link>
        <a href="http://ant.design/#/components/menu" target="_blank"><b>组件请使用AntDesign，如布局导航</b></a>
        <TodoTextInput
          newTodo
          onSave={::this.handleSave}
          placeholder="What needs to be done?" />
      </header>
    )
  }
}

export default Header
