import React from 'react';
import Header from './Header';
import Tasks from './Tasks';
import NewTask from './NewTask';

export default class Content extends React.Component {

  state = {
    tasks: ['task', 'task', 'task'],
  };

  componentDidMount() {
    console.log('hello');
  }

  addTask = (task) => {
    this.setState(prevState => ({tasks: prevState.tasks.concat(task)}));
  };

  render() {
    return (
      <div className="content">
        <Header />
        <Tasks tasks={this.state.tasks}/>
        <NewTask addTask={this.addTask}/>
      </div>
    );
  }

}
