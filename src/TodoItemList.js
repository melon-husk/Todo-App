import React, { Component } from "react";
import TodoItem from "./TodoItem";
class TodoItemList extends Component {
  constructor() {
    super();
    this.state = {
      todoItemArray: [<TodoItem />, <TodoItem />],
    };
  }

  render() {
    return <div>{this.state.todoItemArray}</div>;
  }
}

export default TodoItemList;
