import React from "react";
import "./css/TodoAdd.css";
class TodoAdd extends React.Component {
  constructor() {
    super();
    this.state = {
      todoItemToAdd: "",
      id: 0,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }
  handleClick(event) {
    const key = event.key;
    // console.log(key);
    if (key === "Enter") {
      if (this.state.todoItemToAdd) {
        this.props.itemToAdd(this.state);
        this.setState((prevState) => {
          return {
            todoItemToAdd: "",
            id: prevState.id + 1,
          };
        });
      }
    }
  }
  render() {
    return (
      <div>
        <input
          type="text"
          name="todoItemToAdd"
          onChange={this.handleChange}
          value={this.state.todoItemToAdd}
          onKeyDown={this.handleClick}
          className="inputText"
          placeholder="Enter things you want to do"
        />
      </div>
    );
  }
}

export default TodoAdd;
