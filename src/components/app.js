import React from 'react';

import Auth from './auth/auth.js';
import Login from './auth/login.js';
import LoginContext from './auth/context.js';
import PickModel from './picker/picker.js';

class App extends React.Component {  
  render() {
    return (
      <LoginContext>
        <Login />
        <Auth capability='read'>
          <PickModel />
        </Auth>
      </LoginContext>
    );
  }
}

export default App;


