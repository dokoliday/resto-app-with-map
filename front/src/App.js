import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';

import Identification from './component/Identification'

import styled from 'styled-components';
import backgroundImage from './asset/chef.jpeg'
import Home from './component/Home';
import SignIn from './component/SignIn';
import SignUp from './component/SignUp';



const AppFront = styled.div
  `
    background:url(${backgroundImage}) fixed  no-repeat;
    background-size:100%;
    min-height:100vh ;
  `

class App extends Component {
  state = {
   username: '' 
  }

  setUsername = (e) => {
    this.setState({username:e, redirect:true})
 
    }
  
  render() {
    
    return (
      <AppFront>
        <Switch>
          <Route exact path="/" component={Identification} />
          <Route path="/signin" render={() => <SignIn handleSingingSuccess={this.setUsername}/>} />
          <Route path="/signup" render={() => <SignUp handleSingingSuccess={this.setUsername}/>} />
          <Route  path="/home" render={() => <Home usernameObject={this.state.username}/>} /> 
        </Switch>
      </AppFront>
    );
  }
}


export default App;
