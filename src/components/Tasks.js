import React from 'react';
import Task from './Task';

export default class Tasks extends React.Component {

  render() {
    return (
      <div id="tasks">
        {this.props.tasks.map(task => <Task key={task} task={task}/>)}
      </div>
    );
  }

}
