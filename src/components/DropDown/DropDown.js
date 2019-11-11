import React, { Component, createRef } from 'react';

import DropDownList from './DropDownList';
class DropDown extends Component {
  backDrop = createRef();
  state = {
    isOpen: false,
  };

  componentDidMount() {
    console.log('componentDidMount');
    window.addEventListener('keydown', this.hadlePress);
  }

  hadlePress = e => {
    console.log(e.code);
    if (e.code === 'Escape') {
      this.onClose();
    }
  };

  onClose = () => {
    this.setState({
      isOpen: false,
    });
  };

  handleCloseContainer = e => {
    console.log(e.target);
    const { current } = this.backDrop;
    console.log('current', current);
    if (current === e.target) {
      this.onClose();
    }
  };

  toggle = () => {
    console.log('down');
    this.setState(({ isOpen }) => ({
      isOpen: !isOpen,
    }));
  };
  render() {
    console.log('re - rendered');
    const { isOpen } = this.state;
    return (
      <>
        {!isOpen && <button onClick={this.toggle}>Open</button>}
        {isOpen && (
          <DropDownList
            backDrop={this.backDrop}
            handleCloseContainer={this.handleCloseContainer}
            toggle={this.toggle}
            isOpen={isOpen}
          />
        )}
      </>
    );
  }
}

export default DropDown;
