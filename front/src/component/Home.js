import React, { Component } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import './Home.css'


const MyCarroussel = styled(Carousel)
  `
  
  `


class Home extends Component {
state={
    things:[]
}


getData=()=>{
    axios.get("http://localhost:1080/restaurants/allRestaurants")
    .then(json=>this.setState({things:json.data}))
}

componentDidMount(){
    this.getData()
   
}

  render() {
    console.log(this.state.things)
    return (
      <div className="Home">
      <div className='carousel-global'>
      <Carousel  showThumbs={false} infiniteLoop={true} autoPlay={true}>{this.state.things.map(e=><div><img src={e.image_url} style={{width:"40vw"}}/> <p className="legend">{e.name}</p></div>)}</Carousel>
      </div>
      </div>
    );
  }
}

export default Home;
