import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';
import DropMenu from '../animations/DropDownMenu/DropDown.module.css';
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
          <CSSTransition
            in={isOpen}
            timeout={1000}
            classNames={DropMenu}
            unmountOnExit
          >
            <BaseComponent {...props} {...this.props} />
          </CSSTransition>
        </>
      );
    }
  };
};

export default toggle;
