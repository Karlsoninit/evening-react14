import React, { Component } from 'react';
import TasksContainer from './TasksContainer';

const fn = () => {
  console.log('inner fn');
};
class App extends Component {
  state = {
    users: [],
  };

  getUserInfo = user => {
    this.setState(prevState => ({
      users: [...prevState.users, user],
    }));
    console.log(this.state);

    fn();
  };

  render() {
    console.log(this.state.users);
    return (
      <>
        <TasksContainer getUser={this.getUserInfo} />
      </>
    );
  }
}

export default App;
