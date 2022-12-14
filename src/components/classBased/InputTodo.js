import React from "react";

export default class InputTodo extends React.Component {
  state = {
    title: "",
  };
  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.title.trim()) {
      this.props.addTodoProps(this.state.title);
      this.setState({
        title: "",
      });
    } else {
      alert("Please write item");
    }
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit} className="form-container">
        <input
          name="title"
          onChange={this.onChange}
          type="text"
          className="input-text"
          placeholder="Add Todo..."
          value={this.state.title}
        />
        <button className="input-submit"> submit </button>
      </form>
    );
  }
}
