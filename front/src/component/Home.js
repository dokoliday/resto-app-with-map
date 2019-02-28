import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import { Switch, Route } from 'react-router-dom';
import RestaurantByArea from './RestaurantByArea';
import Carousel from './Carousel';
import Maps from './Maps';



  

class Home extends Component {
   
    render() {
       console.log('tototot',this.props.usernameObject[0])
       if (this.props.usernameObject[0]){
          
        return (
            <div>
                <Header name={this.props.usernameObject[0]}/>
                <Switch>
                 <Route exact path="/home" component={Carousel}/>
                    <Route path="/home/restaurantbyarea" component={RestaurantByArea} />
                    <Route path="/home/map" component={Maps} />
                </Switch>
                <Footer />
            </div> 
        )}else{return null};
    }}

export default Home;
