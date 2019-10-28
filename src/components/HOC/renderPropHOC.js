import React, { Component } from 'react';

class RenderPropHOC extends Component {
  state = {
    isOpen: false,
  };
  handleToggle = () => {
    this.setState(({ isOpen }) => ({
      isOpen: !isOpen,
    }));
  };
  render() {
    const { isOpen } = this.state;
    return this.props.children({
      isOpen,
      toggle: this.handleToggle,
    });
  }
}

export default RenderPropHOC;
