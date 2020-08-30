import React, { Component } from "react";
import "./css/TodoItem.css";
import { ReactComponent as X } from "./css/x.svg";
class TodoItem extends Component {
  constructor() {
    super();
    this.state = {
      completed: false,
      todoText: "Some random text",
      id: "-1",
      renderItem: "true",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  handleChange() {
    this.setState((prevState) => {
      return {
        ...prevState,
        completed: prevState.completed ? false : true,
      };
    });
  }
  handleClick() {
    this.setState({
      renderItem: false,
    });
  }
  componentDidMount() {
    this.setState({
      todoText: this.props.text,
      id: this.props.id,
    });
    console.log("inside");
  }
  render() {
    if (this.state.renderItem) {
      return (
        <div className="itemDiv">
          <label
            className={this.state.completed ? "completed" : "notCompleted "}
          >
            <input
              type="checkbox"
              onChange={this.handleChange}
              checked={this.state.completed}
            />
            {this.state.todoText}
          </label>
          {/* <input type="button" value="X" onClick={this.handleClick} /> */}
          <X onClick={this.handleClick} className="svg-icon svg-baseline" />
        </div>
      );
    } else {
      return null;
    }
  }
}

export default TodoItem;
