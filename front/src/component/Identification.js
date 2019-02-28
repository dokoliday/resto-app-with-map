import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom'

const Button = styled.button
  `color:white;
text-shadow:2px 2px black;
font-size: 2em;
margin: 1em;
padding: 0.25em 1em;
border-style:none;
font-weight:bold;
background: rgba(110, 330, 140, 0.6);
border-radius:600px 600px;
@import url('https://fonts.googleapis.com/css?family=Amatic+SC|Shadows+Into+Light');
font-family: 'Amatic SC', cursive;
`

class Identification extends Component {
    


    render() {
            return (
                <div>
                  <Link to="/inscription"><Button>inscription</Button></Link>
                   <Link to="/auth"><Button>authentification</Button></Link>
                </div>
            )
        }
    }





export default Identification;
