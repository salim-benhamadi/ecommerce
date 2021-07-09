import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home';  
import itemDetails from './pages/itemDetails';

const App = () => (
  <Switch>
    <Route exact={true} path="/" component={Home} />
    <Route  path="/item/:token" component={itemDetails} />
    <Route> 404 not Found ! </Route>
  </Switch>
);

export default App; 
