import React, { Component } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';


const Image = styled.img
    `
  width: 15vw;
  height:45vh;
  `
const NewCarous = styled(Carousel)

    `
    .slide{
        display:flex;
        flex-direction:row;
        justify-content:space-beetween
    }
    .control-dots{
  width: 0;
  height:0;
  }
  .control-dots .dot{
    width: 0;
    height:0;
    }
  .slide .legend{
    background-color:rgba(0,0,0,0);
  }
  `
const Paragraphe = styled.p
    `
    color: green;
    font-size: 4em;
    
    `

class Home extends Component {
    state = {
        restaurants: [],
        area: [],
        selectRestaurant: [],
        id: 0
    }


    newId = event => {
        const id = event.target.value
        this.setState({ id }) // shortcut to: this.setState({ id: id })
        this.getRestaurantByArea(id)
            .then(() => console.log('1', this.state.selectRestaurant))
    }



    getRestaurantByArea = (id) => {
        return axios.get(`http://localhost:1080/restaurants/allRestaurants/restaurantByArea/${id}`)
            // .then(json => console.log('tutu', json.data))
            .then(json => this.setState({ selectRestaurant: json.data }))
    }

    getAllrestaurant = () => {
        axios.get("http://localhost:1080/restaurants/allRestaurants")
            .then(json => this.setState({ restaurants: json.data }))
    }
    getAllArea = () => {
        axios.get("http://localhost:1080/restaurants/allAreas")
            .then(json => this.setState({ area: json.data }))
    }

    componentDidMount() {
        this.getAllrestaurant()
        this.getAllArea()
        this.getRestaurantByArea()
    }

    render() {
        // console.log(this.state.things)
        return (
            <div className="Home">
                <NewCarous
                    showThumbs={false}
                    infiniteLoop={true}
                    autoPlay={true}
                    >
                    {this.state.restaurants
                        .map(e =>
                            <div><Paragraphe>
                            {e.name}
                        </Paragraphe><Image
                                src={e.image_url}
                                style={{ width: "40vw" }} />
                                
                            </div>)}
                </NewCarous>

                <form>
                    <select onChange={this.newId}  >
                        <option>lieu</option>
                        {this.state.area.map(e =>
                            <option value={e.id}>{e.name_area}</option>
                        )}
                    </select>
                </form>
                {this.state.selectRestaurant.map(e => <p>{e.name}</p>)}
            </div>
        );
    }
}

export default Home;
