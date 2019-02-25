import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const ButtonSection= styled.div
`
display:flex;
`
const Head = styled.div
  `display: flex;
  background: rgba(10, 30, 40, 0.6);
  padding:8vh;
  justify-content:space-around;
  `
const Button = styled.button
  `color:white;
  text-shadow:2px 2px black;
  font-size: 2em;
  margin: 1em;
  padding: 0.25em 1em;
  border-radius: 3px;
  background-color:rgba(310,232,59,0.5)
 
`
const Title = styled.h1`
  color:rgba(310,232,59,0.7);
  text-shadow:4px 2px black;
  font-size: 3em;
  margin: auto;
  text-decoration: underline;
  text-decoration-skip: edge;
  `


class Header extends Component {
  render() {
    return (
      <Head>
        <Link to="/"><Title>Resto's<br />un site pour les trouvez tous</Title></Link>
        <ButtonSection>
        <Link to="/maps"><Button>to map</Button></Link>
        <Link to="/lieu"><Button>to lieu</Button></Link>
        </ButtonSection>
      </Head>
    );
  }
}

export default Header;
