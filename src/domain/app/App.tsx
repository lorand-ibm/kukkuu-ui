import { Route, Switch } from 'react-router';
import React from 'react';

import Home from '../home/Home';

const App: React.FC = () => {
  return (
    <Switch>
      <Route path="/" component={Home} />
    </Switch>
  );
};

export default App;