import React, { Component } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const Slide = styled.div
`
display:flex;
justify-content:space-around;
`
const Image = styled.img
    `
    width:30vw !important;
    height:60vh !important;
    margin-left:4vw;
    border:41px  solid rgba(10, 30, 40, 0.3) !important;
    border-radius:600px 600px;
    margin-top:3vh;
  `
const NewCarous = styled(Carousel)
    `
    .carousel .slide{
        justify-content:space-around;
        background: rgba(330,330,330,0.5);

    }
    .carousel .control-dots{
        width: 0;
        height:0;
  }
  .carousel .control-dots .dot{
        width: 0;
        height:0;
    }
    .slide .legend{
        background-color:rgba(0,0,0,0);
  }
  `
const Paragraphe = styled.p
    `
    color: black;
    font-size: 4em;
    font-weight:bold;
    text-shadow:2px 2px white;
    margin-left:10vw;
    margin-right:3vw
    text-align: right;
    @import url('https://fonts.googleapis.com/css?family=Amatic+SC|Shadows+Into+Light');
     font-family: 'Amatic SC', cursive;
    
    `

class Home extends Component {
    state = {
        restaurants: [],
        
    }

    getAllrestaurant = () => {
        axios.get("http://localhost:3080/restaurants/allRestaurants")
            .then(json => this.setState({ restaurants: json.data }))
    }


    componentDidMount() {
        this.getAllrestaurant()

    }

    render() {
        return (
            <div>
            
            <NewCarous
                autoPlay={true}
                showThumbs={false}
                infiniteLoop={true}

            >
                {this.state.restaurants
                    .map(e =>
                        <Slide><Image
                            src={e.image_url}
                            style={{ width: "40vw" }} />
                            <Paragraphe>
                                {e.name}<br/>
                                {e.mainCategory}<br/>
                                {e.description}
                            </Paragraphe>
                        </Slide>)}

                        
            </NewCarous>
          
            
             </div>

        );
    }
}
export default Home;
