import React, { Component } from 'react';
import './App.css';
import { Switch, Route ,Redirect} from 'react-router-dom';
import Inscription from'./component/Inscription'
import Identification from './component/Identification'
import Auth from './component/Auth'
import styled from 'styled-components';
import backgroundImage from './asset/chef.jpeg'
import App2 from './component/App2';



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
    console.log("tutu",this.state.username[0])
    // if (this.state.redirect === true) 
    //   return <Redirect to="/app2" />
    return (
      <AppFront>
        <Switch>
          <Route exact path="/" component={Identification} />
          <Route path="/inscription" render={() => <Inscription handleSingingSuccess={this.setUsername}/>} />
          <Route path="/auth" render={() => <Auth handleSingingSuccess={this.setUsername}/>} />
          <Route  path="/app2" render={() => <App2 usernameObject={this.state.username}/>} /> 
        </Switch>
      </AppFront>
    );
  }
}


export default App;
