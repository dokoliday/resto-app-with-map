import React, { Component } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import charly from '../asset/charly.png';
import heart from '../asset/heart.png';

const Alink =styled.a
`color: white;
text-decoration:none;`
const ImageHeart =styled.img
`width:2vw;
height:5vh;
`
const Select= styled.select

  `color:black;
  font-size: 1.5em;
  margin:2vh;
  padding:2vh;
  border-style:none;
  background-color:rgba(210,222,259,0.7);
  border-radius:600px 600px;
 
`
const AllLieu = styled.div
  `display:flex
  justify-content:space-around;
  `
const Paragraphe = styled.p
  `
    display:flex;
    flex-direction:column;
    color: white;
    font-size: 4em;
    text-shadow:2px 2px black
    background: rgba(10, 30, 40, 0.6);;
    @import url('https://fonts.googleapis.com/css?family=Amatic+SC|Shadows+Into+Light');
    font-family: 'Amatic SC', cursive;
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
    return axios.get(`http://localhost:3080/restaurants/allRestaurants/restaurantByArea/${id}`)
      // .then(json => console.log('tutu', json.data))
      .then(json => this.setState({ selectRestaurant: json.data }))
  }

  getAllArea = () => {
    axios.get("http://localhost:3080/restaurants/allAreas")
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
            <div>{this.state.selectRestaurant.map(e => <div><Paragraphe>{e.name}<br/>{e.address}<br/><Alink href={e.to_website} target="_blank">More infos</Alink></Paragraphe>
              {Array(e.editorial_rating).fill(<ImageHeart src={heart} />)}</div>)}</div>
       <div><img src={charly} /></div> 

      </AllLieu>
    );
  }
}

export default Lieu;
