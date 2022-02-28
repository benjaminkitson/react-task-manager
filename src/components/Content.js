import React from 'react';
import Header from './Header';
import Tasks from './Tasks';

export default class Content extends React.Component {

  state = {
    tasks: [],
  };

  componentDidMount() {
    console.log("hello");
  }

  render() {
    return (
      <div className="content">
        <Header />
        <Tasks />
      </div>
    );
  }

}
