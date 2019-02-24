import React, { Component } from 'react';
import styled from 'styled-components'

const Head = styled.div
  `display: flex;
  background: rgba(0, 0, 0, 0.5);
  padding:8vh
  `
const Button = styled.button`
  color: palevioletred;
  font-size: 1em;
  width:10%
  margin: 1em;
  padding: 0.25em 1em;
  border-radius: 3px;
`
const Title = styled.h1`
  color:black;
  font-size: 5em;
  margin: auto;
  `


class Header extends Component {
  render() {
    return (
      <Head>
        <Title>Resto's</Title>
      </Head>
    );
  }
}

export default Header;
