import React, { Component } from 'react';
import styled from 'styled-components';

const Foot = styled.div
  `display: flex;
  background: rgba(10, 30, 40, 0.6);
  min-height:15vh
    `
const Title = styled.h3`
  color:white;
  font-size: 2em;
  margin: auto;
  @import url('https://fonts.googleapis.com/css?family=Amatic+SC|Shadows+Into+Light');
  font-family: 'Amatic SC', cursive;
  `


class Footer extends Component {
  render() {
    return (
      <Foot>
       <Title>Copyrith Alexandre Smirnoff 2019</Title>
      </Foot>
    );
  }
}

export default Footer;
