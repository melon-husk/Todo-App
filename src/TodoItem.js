import React, { Component } from "react";

const completedStyle = {
  fontStyle: "italic",
  color: "#cdcdcd",
  textDecoration: "line-through",
};

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
        <div>
          <label style={this.state.completed ? completedStyle : null}>
            <input
              type="checkbox"
              onChange={this.handleChange}
              checked={this.state.completed}
            />
            {this.state.todoText}
          </label>
          <input type="button" value="X" onClick={this.handleClick} />
        </div>
      );
    } else {
      return null;
    }
  }
}

export default TodoItem;
