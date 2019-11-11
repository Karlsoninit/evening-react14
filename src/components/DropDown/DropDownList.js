import React, { Component } from 'react';
import css from './DropDown.module.css';

class DropDownList extends Component {
  state = {};

  componentWillUnmount() {
    console.log('componentWillUnmount');
    window.removeEventListener('keydown', this.hadlePress);
  }
  render() {
    const { toggle, backDrop, handleCloseContainer } = this.props;
    return (
      <>
        <div
          onClick={handleCloseContainer}
          ref={backDrop}
          className={css.modalContainer}
        >
          <div className={css.modal}>
            <h2>Modal</h2>
            <button onClick={toggle}>Close</button>
          </div>
        </div>
      </>
    );
  }
}

export default DropDownList;
