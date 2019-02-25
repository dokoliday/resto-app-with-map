import React, { Component } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import charly from '../asset/charly.png';
import heart from '../asset/heart.png';

const ImageHeart =styled.img
`width:2vw;
height:5vh;
`
const Select= styled.select
`
margin-top:3em;
padding:1em;
background: rgba(310,232,59,0.5);
font-size: 3vh;
color:black;
text-shadow:2px 2px white;
`
const AllLieu = styled.div
  `display:flex
  justify-content:space-around;
  `
const Paragraphe = styled.p
  `
    display:flex;
    flex-direction:column;
    color: rgba(310,232,159);
    font-weight:bold
    font-size: 3em;
    text-shadow:4px 2px black
    
    `
  
class Lieu extends Component {
  state = {
    area: [],
    selectRestaurant: [],
    id: 0
  }


  newId = event => {
    const id = event.target.value
    this.setState({ id }) // shortcut to: this.setState({ id: id })
    this.getRestaurantByArea(id)
  }



  getRestaurantByArea = (id) => {
    return axios.get(`http://localhost:1080/restaurants/allRestaurants/restaurantByArea/${id}`)
      // .then(json => console.log('tutu', json.data))
      .then(json => this.setState({ selectRestaurant: json.data }))
  }

  getAllArea = () => {
    axios.get("http://localhost:1080/restaurants/allAreas")
      .then(json => this.setState({ area: json.data }))
  }

  componentDidMount() {
    this.getAllArea()
    this.getRestaurantByArea()
  }

  render() {
    // console.log(this.state.things)
    return (
      <AllLieu>
        <form>
          <Select onChange={this.newId}>
            <option>lieu</option>
            {this.state.area.map(e =>
              <option value={e.id}>{e.name_area}</option>
            )}
          </Select>
        </form>
            <div>{this.state.selectRestaurant.map(e => <div><Paragraphe>{e.name}</Paragraphe>
              {Array(e.editorial_rating).fill(<ImageHeart src={heart} />)}</div>)}</div>
       <div><img src={charly} /></div> 

      </AllLieu>
    );
  }
}

export default Lieu;
