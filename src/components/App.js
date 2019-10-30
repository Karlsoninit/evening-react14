import React, { Component, createContext } from 'react';

import { Route, Switch, Link, NavLink } from 'react-router-dom';

import Header from './navigation/header/Header';
import Nav from './navigation/nav/Nav';

export const { Provider, Consumer } = createContext({
  someText: 'text',
});

export const myProvider = createContext({
  someText: 'text',
});

class App extends Component {
  state = {
    theme: 'white',
  };

  changeTheme = () => {
    this.setState(prevTheme => ({
      theme: prevTheme.theme === 'white' ? 'black' : 'white',
    }));
  };

  changeColor = () => {
    console.log('change');
  };

  render() {
    const { theme } = this.state;
    return (
      <>
        <Header />
        <Nav />
        {/* <button
          style={{
            backgroundColor: theme === 'white' ? 'black' : 'white',
            color: theme === 'white' ? 'white' : 'black',
          }}
          onClick={this.changeTheme}
        >
          {theme === 'white' ? 'black' : 'white'}
        </button>
        <Provider
          value={{
            theme,
            fn: this.changeTheme,
          }}
        >
          <News />
        </Provider> */}
      </>
    );
  }
}

export default App;
