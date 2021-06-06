import {Provider} from 'mobx-react';
import React from 'react';
import AppNavigation from './navigation/navigation';
import * as stores from './store';

const App = () => {
  return (
    <Provider {...stores}>
      <AppNavigation />
    </Provider>
  );
};

export default App;
