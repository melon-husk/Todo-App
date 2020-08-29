import React, { Component } from "react";
import TodoItem from "./TodoItem";
class TodoItemList extends Component {
  constructor() {
    super();
    this.state = {
      todoItemArray: [],
    };
  }
  componentDidUpdate(prevProps) {
    if (prevProps !== this.props) {
      //   console.log("inside ");
      this.setState((prevState) => {
        return {
          ...prevState,
          todoItemArray: [
            ...prevState.todoItemArray,
            <TodoItem
              text={this.props.text}
              key={this.props.id}
              id={this.props.id}
            />,
          ],
        };
      });
    }
    // console.log(prevProps);
  }
  render() {
    return <div>{this.state.todoItemArray}</div>;
  }
}

export default TodoItemList;
