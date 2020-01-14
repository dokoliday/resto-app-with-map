import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import { Switch, Route, Redirect } from 'react-router-dom';
import RestaurantByArea from './RestaurantByArea';
import Carousel from './Carousel';
import Maps from './Maps';





class Home extends Component {

    render() {
        const user= this.props.usernameObject[0]
        if (user) {

            return (
                <div>
                    <Header name={user} />
                    <Switch>
                        <Route exact path="/home" component={Carousel} />
                        <Route path="/home/restaurantbyarea" component={RestaurantByArea} />
                        <Route path="/home/map" component={Maps} />
                    </Switch>
                    <Footer />
                </div>
            )
        } else { 
            return <Redirect to="/" /> };
    }
}

export default Home;
