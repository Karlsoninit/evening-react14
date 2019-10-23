import React, { Component } from 'react';

const toggle = props => BaseComponent => {
  return class Toggle extends Component {
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
      console.log(' PROPS', props);
      console.log(' THIS.PROPS', this.props);

      return (
        <>
          <button onClick={this.handleClick}>
            {isOpen ? `Close ${props.name}` : `Open ${props.name}`}
          </button>
          {isOpen && <BaseComponent {...props} {...this.props} />}
        </>
      );
    }
  };
};

export default toggle;
