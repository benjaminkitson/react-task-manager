import React from 'react';

export default class Task extends React.Component {

  deleteTask = () => {
    this.props.deleteTask(this.props.task);
  };

  render() {
    return (
      <div className="task">{this.props.task}<button className="button--deletetask" onClick={this.deleteTask}>Delete</button></div>
    );
  }
}
