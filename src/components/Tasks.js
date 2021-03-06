import React from 'react';
import Task from './Task';

export default class Tasks extends React.Component {

  render() {
    return (
      <div id="tasks">
        {this.props.tasks.map(task => <Task key={task.title} task={task} completed={task.completed} deleteTask={this.props.deleteTask} markAsCompleted={this.props.markAsCompleted}/>)}
      </div>
    );
  }

}
