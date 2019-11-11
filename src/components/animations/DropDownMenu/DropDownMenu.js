import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';
import DropStyleComponents from './DropDown.module.css';
console.log(DropStyleComponents);
// import './drop.css';

class DropDownMenu extends Component {
  state = { isOpen: false };
  toggle = () => {
    this.setState(({ isOpen }) => ({
      isOpen: !isOpen,
    }));
  };
  render() {
    const { isOpen } = this.state;
    return (
      <>
        <button onClick={this.toggle}>{isOpen ? 'close' : 'open'}</button>
        <CSSTransition
          in={isOpen}
          timeout={1000}
          classNames={DropStyleComponents}
          unmountOnExit
        >
          <div>
            <h2>Work</h2>
            <h2>Work</h2>
            <h2>Work</h2>
            <h2>Work</h2>
          </div>
        </CSSTransition>
      </>
    );
  }
}

export default DropDownMenu;
