import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Lieu from './component/Lieu';
import Maps from './component/Maps';
import Inscription from'./component/Inscription'
import Acceuil from './component/Acceuil'
import Home from './component/Home';
import Header from './component/Header';
import Auth from './component/Auth'
import Footer from './component/Footer';
import styled from 'styled-components';
import backgroundImage from './asset/chef.jpeg'



const AppFront = styled.div
  `
    background:url(${backgroundImage}) fixed;
    background-size:100%;
    min-height:100vh ;
  `

class App extends Component {
  render() {
    return (
      <AppFront>
       
        <Switch>
          <Route exact path="/" component={Acceuil} />
          <Route path="/inscription" component={Inscription} />
          <Route path="/auth" component={Auth} />
          <Route path="/home" component={Home} />
          <Route path="/lieu" component={Lieu} />
          <Route path="/maps" component={Maps} />
        </Switch>
       
      </AppFront>
    );
  }
}

export default App;
