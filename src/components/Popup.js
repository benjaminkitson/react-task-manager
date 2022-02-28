import React from 'react';
import NewTask from './TaskForm';
import Login from './LoginForm';

export default class Popup extends React.Component {

  closePopup = (e) => {
    if (e.target.classList.contains('popup')) {
      this.props.isntAddingTasks();
    }
  };

  render() {
    return (
      <div className={`popup ${this.props.isOpen ? 'popup-open' : 'popup-closed'}`} onMouseDown={this.closePopup}>
        <div className="popup-contents">
          <NewTask addTask={this.props.addTask} isntAddingTasks={this.props.isntAddingTasks}/>
        </div>
      </div>
    );
  }
}
