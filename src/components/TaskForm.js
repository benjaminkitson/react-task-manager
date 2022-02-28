import React from 'react';

export default class NewTask extends React.Component {

  addTask = (e) => {
    e.preventDefault();
    if (e.target.task.value) {
      this.props.addTask(e.target.task.value.trim());
      this.props.isntAddingTasks();
    }
  };

  render() {
    return (
      <form id="newtask-form" onSubmit={this.addTask}>
        <input type="text" name="task" placeholder="Enter task title"></input>
        <button>Add task</button>
      </form>
    );
  }
}
