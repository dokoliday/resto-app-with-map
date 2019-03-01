import React, { Component } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import charly from '../asset/charly.png';
import heart from '../asset/heart.png';
import { Map, TileLayer, Marker, Popup, ZoomControl } from 'react-leaflet'
import L from 'leaflet'

const Mylink =styled.a
`color: white;
text-decoration:none;`
const ImageRanking =styled.img
`width:2vw;
height:5vh;
`
const MySelect= styled.select

  `color:black;
  font-size: 1.5em;
  margin:2vh;
  padding:2vh;
  border-style:none;
  background-color:rgba(210,222,259,0.7);
  border-radius:600px 600px;
 
`
const RestaurantByAreaStyled = styled.div
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
  
class RestaurantByArea extends Component {
  state = {
    area: [],
    selectRestaurant: [],
    id: 0,
    zoom: 18,
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
    return (
      <RestaurantByAreaStyled >
        <form>
          <MySelect onChange={this.newId}>
            <option>lieu</option>
            {this.state.area.map(e =>
              <option value={e.id}>{e.name_area}</option>
            )}
          </MySelect>
        </form>
            <div>{this.state.selectRestaurant.map(e => <div><Paragraphe>{e.name}<br/>{e.address}<br/><Mylink href={e.to_website} target="_blank">More infos</Mylink></Paragraphe>
              {Array(e.editorial_rating).fill(<ImageRanking src={heart} />)}
              <Map center={[e.latitude, e.longitude]} zoom={this.state.zoom} zoomControl={false} style={{ height: 600 }}>

<TileLayer
  attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
/>
<Marker position={[e.latitude, e.longitude]} icon={new L.Icon({
    iconUrl: require("../asset/burger.png"),
    iconSize: [this.state.zoom+20, this.state.zoom+20],
  })}>
    <Popup>
      {e.name}<br />
      {e.description}<br />
      <a href={e.to_website} target="_blank">mor infos</a>
    </Popup>
  </Marker>)}

<ZoomControl position="topright" />
</Map>
              </div>)}</div>
       <div><img src={charly} /></div> 

      </RestaurantByAreaStyled >
    );
  }
}

export default RestaurantByArea;
