import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Views/home.js';
import Campaigns from './Views/campaigns.js';


const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route exact path='/campaigns' component={Campaigns}/>
    </Switch>
  </main>
)

export default Main;
