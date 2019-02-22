import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Lieu from './component/Lieu';
import Maps from './component/Maps';
import Home from './component/Home';
import Header from './component/Header';
import Footer from './component/Footer';




class App extends Component {
  render() {
    return (
      <div className="App">
      <Header/>
       <Switch>
         <Route exact path="/" component={Home}/>
         <Route  path="/lieu" component={Lieu}/>
         <Route  path="/maps" component={Maps}/>
       </Switch>
       <Footer/>
      </div>
    );
  }
}

export default App;
