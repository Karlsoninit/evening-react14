import React, { Component } from 'react';
import FormInput from '../FormInput/FormInput';

const initialState = {
  login: '',
  email: '',
  password: '',
};

class TasksContainer extends Component {
  state = { ...initialState };

  handleSubmit = e => {
    e.preventDefault();

    this.props.getUser(this.state);
    this.setState({ ...initialState });
  };

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  };

  render() {
    const { login, email, password } = this.state;
    return (
      <form
        style={{
          display: 'flex',
          flexDirection: 'column',
          width: '300px',
          margin: 'auto',
        }}
        onSubmit={this.handleSubmit}
      >
        <FormInput
          type="text"
          value={login}
          name="login"
          onChange={this.handleChange}
        />
        <FormInput
          type="email"
          value={email}
          name="email"
          onChange={this.handleChange}
        />
        <FormInput
          type="password"
          value={password}
          name="password"
          onChange={this.handleChange}
        />

        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default TasksContainer;
