
import React, { Component } from 'react'
import About from './Components/About/About'
import Header from './Components/Home/Header'
import TodoApp from './Components/TodoApp/TodoApp'
import 'bootstrap/dist/css/bootstrap.min.css';

export default class App extends Component {
  render() {
    return (
     <>
        <Header/>
        <TodoApp/>
        </>
    )
  }
}

