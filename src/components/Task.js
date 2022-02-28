import React from 'react';

export default class Task extends React.Component {

  deleteTask = () => {
    this.props.deleteTask(this.props.task);
  };

  markAsCompleted = () => {
    this.props.markAsCompleted(this.props.task);
  };

  render() {
    return (
      <div className="task">
        {this.props.task.title}
        <div className="buttons">
          <button className="button--markascompleted" onClick={this.markAsCompleted}>
            Done
          </button>
          <button className="button--deletetask" onClick={this.deleteTask}>
            Delete
          </button>
        </div>
      </div>
    );
  }
}
