import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { HomePage, CartPage } from '../Pages'
import Header from '../Header'
// import Loader from '../Loader';
import './App.css'


const App = () =>  {
    return (
      <main role="main" className="container">
      <Header numItems={5} total={210}/>
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

      </main>
    )
}


export default App;
