import React, { Component } from 'react'
import { Map, TileLayer, Marker, Popup, ZoomControl } from 'react-leaflet'
import L from 'leaflet'
import axios from 'axios'
import styled from 'styled-components';


const AllMaps = styled.div
  `
max-height:100vh;
`
const Myicon = new L.Icon({
  iconUrl: require("../asset/burger.png"),
  iconSize: [40, 40],
});

class Maps extends Component {
  state = {
    data: [],
    selectedCategory:"",
    zoom: 13,
  }

  getAllrestaurant = () => {
    axios.get("http://localhost:1080/restaurants/allRestaurants")
      .then(json => this.setState({ data: json.data }))
  }

  componentDidMount() {
    this.getAllrestaurant()

  }
  newBars=()=>{
    this.setState({selectedCategory : "Bars"})
  }
  newRestaurants=()=>{
    this.setState({selectedCategory: "Restaurants"})
  }

  render() {

    return (
      <AllMaps>
        <button onClick={this.newBars}>take bars</button>
        <button onClick={this.newRestaurants}>take restaurants</button>
        <Map center={[48.862659, 2.36371]} zoom={this.state.zoom} zoomControl={false} style={{ height: 600 }}>
          <TileLayer
            attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {this.state.data.filter(a=>(a.mainCategory === this.state.selectedCategory)).map(b => <Marker position={[b.latitude, b.longitude]} icon={Myicon}>
           
            <Popup>
              {b.name}
            </Popup>
          </Marker>)} >
        <ZoomControl position="topright" />
        </Map>

      </AllMaps>
    )
  }
}
export default Maps