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
          <button className={`${this.props.task.completed ? 'button--done' : 'button--markascompleted'}`} onClick={this.markAsCompleted}>
            {`${this.props.task.completed ? 'Done!' : 'Mark as done'}`}
          </button>
          <button className="button--deletetask" onClick={this.deleteTask}>
            Delete
          </button>
        </div>
      </div>
    );
  }
}
