import React, { Component } from 'react';
import FormInput from '../FormInput/FormInput';
import shortId from 'shortid';
const initialState = {
  task: '',
  description: '',
};

class FormContainer extends Component {
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
      id: shortId(),
    });
  };

  render() {
    const { task, description } = this.state;
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
          value={task}
          name="task"
          onChange={this.handleChange}
        />
        <FormInput
          type="text"
          value={description}
          name="description"
          onChange={this.handleChange}
        />

        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default FormContainer;
