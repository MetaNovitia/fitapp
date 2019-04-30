import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home/Home';
// import About from './components/About/About';
import './App.css';

class App extends Component {

   render() {
       return (
           <Switch>
               <Route exact path="/" component={Home} />
               {/* <Route path="/about" component={About} /> */}
           </Switch>
       );
   }
}

export default App;