import React from 'react';
import Header from './Header';
import Tasks from './Tasks';
import Popup from './Popup';

export default class Content extends React.Component {

  state = {
    tasks: [{title: 'laundry', completed: true}],
    isAddingTasks: false,
    isLoggedIn: true,
    isSigningUp: false,
  };

  componentDidMount() {
    console.log('hello');
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

  render() {
    return (
      <div className="content">
        <Header />
        <Tasks tasks={this.state.tasks} deleteTask={this.deleteTask}/>
        <Popup addTask={this.addTask} isOpen={this.state.isAddingTasks} isntAddingTasks={this.isntAddingTasks}/>
        <button onClick={this.isAddingTasks}>Add a task!</button>
      </div>
    );
  }

}
