import React, { Component } from 'react'
import { Map, TileLayer, Marker, Popup, ZoomControl } from 'react-leaflet'
import L from 'leaflet'
import axios from 'axios'
import styled from 'styled-components';



const AllMaps = styled.div
  `
max-height:100vh;
max-width:80vw;
margin:auto;
`
const Button = styled.button
  `color:white;
text-shadow:2px 2px black;
font-size: 2em;
margin: 1em;
padding: 0.25em 1em;
border-style:none;
font-weight:bold;
background: rgba(10, 30, 40, 0.6);
border-radius:600px 600px;
@import url('https://fonts.googleapis.com/css?family=Amatic+SC|Shadows+Into+Light');
font-family: 'Amatic SC', cursive;
`
const SectionButton = styled.div
  `display:flex;
  justify-content:space-around`
// const Myicon = new L.Icon({
//   iconUrl: require("../asset/burger.png"),
//   iconSize: [30, 30],
// });

class Maps extends Component {
  state = {
    data: [],
    activeFilters: { category: "", rating: 0 },
    zoom: 13,
    
  }

  getAllrestaurant = () => {
    axios.get("http://localhost:3080/restaurants/allRestaurants")
      .then(json => this.setState({ data: json.data }))
  }

  componentDidMount() {
    this.getAllrestaurant()

  }

  selectGoodBars = () => {
    this.setState({ activeFilters: { category: "Bars", rating: 5 } })
  }

  selectGoodRestaurants = () => {
    this.setState({ activeFilters: { category: "Restaurants", rating: 5 } })
  }
  selectBars = () => {
    this.setState({ activeFilters: { category: "Bars", rating: 0 } })
  }

  selectRestaurants = () => {
    this.setState({ activeFilters: { category: "Restaurants", rating: 0 } })
  }

  filterByMainCategory(place) {
    const selectedCategory = this.state.activeFilters.category;
    return selectedCategory ? place.mainCategory === selectedCategory : true;
  }

  render() {

    return (
      <AllMaps>
        <SectionButton>
          <Button onClick={this.selectRestaurants}>Resto's</Button>
          <Button onClick={this.selectGoodRestaurants}>Les meilleurs Resto's</Button>
          <Button onClick={this.selectGoodBars}>Les meilleurs Bar's</Button>
          <Button onClick={this.selectBars}>Bar's</Button>
        </SectionButton>


        <Map center={[48.862659, 2.36371]} zoom={this.state.zoom} zoomControl={false} style={{ height: 600 }}>

          <TileLayer
            attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {this.state.data
            .filter(a => (this.filterByMainCategory(a) && (a.editorial_rating >= this.state.activeFilters.rating)))
            .map(b => <Marker position={[b.latitude, b.longitude]} icon={new L.Icon({
              iconUrl: require("../asset/burger.png"),
              iconSize: [this.state.zoom+20, this.state.zoom+20],
            })}>
              <Popup>
                {b.name}<br />
                {b.description}<br />
                <a href={b.to_website} target="_blank">mor infos</a>
              </Popup>
            </Marker>)}

          <ZoomControl position="topright" />
        </Map>

      </AllMaps>
    )
  }
}
export default Maps