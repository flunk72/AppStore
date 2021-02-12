import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { HomePage, CartPage } from '../Pages'
// import Loader from '../Loader';
import './App.css'


const App = () =>  {
    return (
      <Switch>
        <Route 
          path='/'
          component={HomePage}
          exact
        />
        <Route 
          path='/'
          component={CartPage}
        />
      </Switch>
    )
}


export default App;
