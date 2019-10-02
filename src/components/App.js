import React from 'react';
import Profile from './Profile/Profile';
import everithing from '../everithing.json';

const App = () => (
  <>
    <Profile
      everithing={everithing}
      defaultImage="https://htmlcolorcodes.com/assets/images/html-color-codes-color-tutorials-hero-00e10b1f.jpg"
    />
  </>
);

export default App;
