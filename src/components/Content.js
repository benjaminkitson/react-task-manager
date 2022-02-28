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
    this.setState(prevState => ({tasks: prevState.tasks.concat(task)}));
  };

  render() {
    return (
      <div className="content">
        <Header />
        <Tasks tasks={this.state.tasks}/>
        <Popup addTask={this.addTask} isOpen={this.state.isAddingTasks} isntAddingTasks={this.isntAddingTasks}/>
        <button onClick={this.isAddingTasks}>Add a task!</button>
      </div>
    );
  }

}
