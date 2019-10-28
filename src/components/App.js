import React, { Component, createContext } from 'react';
import News from './News/News';

// const colorTheme = {
//   theme: 'black',
//   size: '30px',
// };
export const { Provider, Consumer } = createContext({
  someText: 'text',
});

export const myProvider = createContext({
  someText: 'text',
});

console.log(myProvider);
// export const Theme = createContext(); default method

// const App = () => (
//   <>
//     <Provider value={{ ...colorTheme }}>
//       <News />
//     </Provider>
//   </>
// );

// export default App;

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
        <button
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
        </Provider>
      </>
    );
  }
}

export default App;
