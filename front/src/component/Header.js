import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import logo from '../asset/logo.png';



const ButtonSection= styled.div
`
display:flex;
flex-direction:column;

`
const Head = styled.div
  `display: flex;
  background: rgba(10, 30, 40, 0.6);
  padding:6vh;
  margin:0;
  justify-content:space-around;
  text-decoration:none;
  text-align:center;

  `
const Button = styled.button
  `color:white;
  text-shadow:2px 2px black;
  font-size: 2em;
  margin: 1em;
  padding: 0.25em 1em;
  border-style:none;
  background-color:rgba(210,222,259,0.5);
  border-radius:600px 600px;
  @import url('https://fonts.googleapis.com/css?family=Amatic+SC|Shadows+Into+Light');
  font-family: 'Amatic SC', cursive;
`
const Title = styled.h1`
  color:white;
  text-shadow:4px 2px black;
  font-size: 4.5em;
  margin: auto;
  
  @import url('https://fonts.googleapis.com/css?family=Amatic+SC|Shadows+Into+Light');
  font-family: 'Amatic SC', cursive;
`
const Mylink = styled(Link)
`text-decoration:none;`

class Header extends Component {
  render() {
    return (
      <Head>
        <img src={logo} style={{width:200,height:200}}/>;
        <Mylink to="/home/"><Title>Resto's<br />Bonjour {this.props.name.pseudo}</Title></Mylink>
        <ButtonSection>
        <Link to="/home/map"><Button>Resto's Map</Button></Link>
        <Link to="/home/restaurantbyarea"><Button>Selection par Quartier</Button></Link>
        </ButtonSection>
      </Head>
    );
  }
}

export default Header;
