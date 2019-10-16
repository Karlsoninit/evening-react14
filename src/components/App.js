import React, { Component } from 'react';
import FormContainer from './FormContainer';
import TasksContainer from './TaskContainer/TaskContainer';

const fn = () => {
  console.log('inner fn');
};

class App extends Component {
  state = {
    tasks: [],
    uniqueId: null,
  };

  componentDidMount() {
    console.log('componentDidMount');
    const getTasks = localStorage.getItem('tasks');
    if (getTasks) {
      this.setState({
        tasks: JSON.parse(getTasks),
      });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('prevState', prevState.tasks);
    console.log('state', this.state.tasks);

    if (prevState.tasks !== this.state.tasks) {
      localStorage.setItem('tasks', JSON.stringify(this.state.tasks));
    }
    if (prevState.uniqueId !== this.state.uniqueId) {
      this.setState(prevState => ({
        tasks: prevState.tasks.filter(task => task.id !== this.state.uniqueId),
      }));
    }
  }

  getUserInfo = user => {
    this.setState(prevState => ({
      tasks: [...prevState.tasks, user],
    }));
    console.log(this.state);

    fn();
  };

  handleDelete = evt => {
    console.log(evt.target.dataset.id);
    this.setState({
      uniqueId: evt.target.dataset.id,
    });
  };

  render() {
    const { tasks } = this.state;
    console.log('render');
    return (
      <>
        <FormContainer getUser={this.getUserInfo} />
        {tasks.length > 0 && (
          <TasksContainer handleDelete={this.handleDelete} tasks={tasks} />
        )}
        {tasks.length === 0 && <h2>Soooory ....</h2>}
      </>
    );
  }
}

export default App;
