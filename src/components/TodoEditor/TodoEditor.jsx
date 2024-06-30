import React, { Component } from "react";
import "./TodoEditor.css";


class TodoEditor extends Component {
  state = {
    message: "",
  };

  handleChange = e => {
    this.setState({ message: e.currentTarget.value });
  };

  handelSubmit = e => {
    e.preventDefault();
    console.log(this.state);
    this.props.onSubmitProp(this.state.message);
    this.setState({message:''});
  };

  render() {
    return (
      <form className="TodoEditor" onSubmit={this.handelSubmit}>
        <textarea
          className="TodoEditor__textarea"
          value={this.state.message}
          onChange={this.handleChange}
        ></textarea>
        <button type="submit" className="TodoEditor__button">
          Добавить
        </button>
      </form>
    );
  }
}

export default TodoEditor;
