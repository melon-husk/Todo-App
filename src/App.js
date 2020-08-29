import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import TodoAdd from "./TodoAdd";
import TodoItemList from "./TodoItemList";

class App extends Component {
  constructor() {
    super();
    this.state = {
      todoItemArray: [],
    };
    this.itemToAdd = this.itemToAdd.bind(this);
  }
  itemToAdd(data) {
    this.setState((prevState) => ({
      todoItemArray: [...prevState.todoItemArray, data],
    }));
    console.log(this.state.todoItemArray);
  }
  render() {
    return (
      <div>
        <TodoAdd itemToAdd={this.itemToAdd} />
        <TodoItemList />
      </div>
    );
  }
}

export default App;
