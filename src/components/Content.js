import React from 'react';
import Header from './Header';
import Tasks from './Tasks';
import Popup from './Popup';

export default class Content extends React.Component {

  state = {
    tasks: [],
    isAddingTasks: false,
    isLoggedIn: true,
    isSigningUp: false,
  };

  componentDidMount() {
    if (localStorage.getItem('tasks')) {
      this.setState(() => ({tasks: JSON.parse(localStorage.getItem('tasks'))}));
    } else {
      localStorage.setItem('tasks', JSON.stringify([]));
    }
  }

  componentDidUpdate() {
    localStorage.setItem('tasks', JSON.stringify(this.state.tasks));
  }


  // These two could presumably be one method?

  isAddingTasks = () => {
    this.setState(() => ({isAddingTasks: true}));
  };

  isntAddingTasks = () => {
    this.setState(() => ({ isAddingTasks: false }));
  };

  addTask = (task) => {
    this.setState(prevState => ({tasks: prevState.tasks.concat([{title: task, completed: false}])}));
  };

  deleteTask = (task) => {
    this.setState(prevState => ({tasks: prevState.tasks.filter(item => item.title !== task.title)}));
  };

  markAsCompleted = (task) => {
    const tasksCopy = this.state.tasks.slice();
    const index = tasksCopy.findIndex(item => item.title === task.title);
    tasksCopy[index].completed = true;
    this.setState(() => ({tasks: tasksCopy}));
  };


  render() {
    return (
      <div className="content">
        <Header />
        <Tasks tasks={this.state.tasks} deleteTask={this.deleteTask} markAsCompleted={this.markAsCompleted}/>
        <Popup addTask={this.addTask} isOpen={this.state.isAddingTasks} isntAddingTasks={this.isntAddingTasks}/>
        <button onClick={this.isAddingTasks}>Add a task!</button>
      </div>
    );
  }

}
