import React, { Component } from 'react';

const fetchNews = props => BaseComponent => {
  return class Toogle extends Component {
    state = {
      isOpen: false,
    };
    handleClick = () => {
      this.setState(prevState => ({
        isOpen: !prevState.isOpen,
      }));
    };
    render() {
      const { isOpen } = this.state;
      return (
        <>
          <button onClick={this.handleClick}>
            {isOpen ? 'Close filter' : 'Open filter'}
          </button>
          {isOpen && <BaseComponent {...this.props} />}
        </>
      );
    }
  };
};

export default fetchNews;
