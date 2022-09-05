import React from "react";
// import styles from "./TodoItem.module.css"
import styles from "./TodoItem.module.css";
export default class TodoItem extends React.Component {
  state = {
    editing: false,
  };
  handleEditing = () => {
    this.setState({
      editing: true,
    });
  };

  handleUpdatedDone = (e) => {
    if (e.key === "Enter") {
      this.setState({editing: false});
    }
  }
  render() {
    const { completed, id, title } = this.props.todo;
    const { setUpdate } = this.props;

    const completedStyle = {
      fontStyle: "italic",
      color: "#595959",
      opacity: 0.4,
      textDecoration: "line-through",
    };
    let viewMode = {};
    let editMode = {};
    if (this.state.editing) {
      viewMode.display = "none";
    } else {
      editMode.display = "none";
    }
    return (
      <li className={styles.item}>
        <div onDoubleClick={this.handleEditing} style={viewMode}>
          <input
            type="checkbox"
            className={styles.checkbox}
            checked={completed}
            onChange={() => this.props.handleChangeProps(id)}
          />
          <button onClick={() => this.props.deleteTodoProps(id)}>Delete</button>
          <span style={completed ? completedStyle : null}>{title}</span>
        </div>
        <input
          value={title}
          onChange={(e) => setUpdate(e.target.value, id)}
          onKeyDown={this.handleUpdatedDone}
          type="text"
          className={styles.textInput}
          style={editMode}
        />
      </li>
    );
  }

  componentWillUnmount() {
    console.log("Cleaning up...", this.props.todo)
  }
}
