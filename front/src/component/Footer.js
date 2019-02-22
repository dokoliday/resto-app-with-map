import React, { Component } from 'react';
import styled from 'styled-components'

const Foot = styled.div
  `display: flex;
  background: rgba(0, 0, 0, 0.5);
  padding:15vh
  margin-top:300px;
  `
const Title = styled.h1`
  color:black;
  font-size: 2em;
  margin: auto;
  `

class Footer extends Component {
  render() {
    return (
      <Foot>
        <Title>byby</Title>
      </Foot>
    );
  }
}

export default Footer;