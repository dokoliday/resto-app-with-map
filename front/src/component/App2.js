import React, { Component } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Header from './Header';
import Footer from './Footer';
import { Switch, Route } from 'react-router-dom';
import Lieu from './Lieu';
import Maps from './Maps';
import Home from './Home'


  

class App2 extends Component {
   
    render() {
       console.log('tototot',this.props.usernameObject[0])
       if (this.props.usernameObject[0]){
          
        return (
            <div>
                <Header name={this.props.usernameObject[0]}/>
                <Switch>
                 <Route exact path="/app2" component={Home}/>
                    <Route path="/app2/lieu" component={Lieu} />
                    <Route path="/app2/maps" component={Maps} />
                </Switch>
                <Footer />
            </div> 
        )}else{return null};
    }}

export default App2;
