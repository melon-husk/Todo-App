import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import TodoAdd from "./TodoAdd";
import TodoItemList from "./TodoItemList";

class App extends Component {
  constructor() {
    super();
    this.state = {
      itemText: "",
      itemId: "",
    };
    this.itemToAdd = this.itemToAdd.bind(this);
  }
  itemToAdd(data) {
    this.setState({
      itemText: data.todoItemToAdd,
      itemId: data.id,
    });
    // console.log(this.state);
  }
  render() {
    return (
      <div>
        <TodoAdd itemToAdd={this.itemToAdd} />
        <TodoItemList text={this.state.itemText} id={this.state.itemId} />
      </div>
    );
  }
}

export default App;
