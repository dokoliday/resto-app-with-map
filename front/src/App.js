import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Lieu from './component/Lieu';
import Maps from './component/Maps';
import Home from './component/Home';
import Header from './component/Header';
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
      <Header/>
       <Switch>
         <Route exact path="/" component={Home}/>
         <Route  path="/lieu" component={Lieu}/>
         <Route  path="/maps" component={Maps}/>
       </Switch>
       <Footer/>
      </AppFront>
    );
  }
}

export default App;
