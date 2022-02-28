import React from 'react';

function NewTask() {

  return (
    <div className="popup">
      <div className="popup-contents">
        <form className="newtask-form">
          <input type="text" name="task" placeholder="Enter task title"></input>
          <button>Add task</button>
        </form>
      </div>
    </div>
  );

}

export default NewTask;
