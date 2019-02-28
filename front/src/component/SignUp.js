import React, { Component } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { Redirect } from 'react-router-dom'

const style =
    ` 
    color:white ;
    text-shadow:2px 2px black;
    font-size: 2.5em;
    font-weight:bold;
    
    margin: 4em;
    padding: 0.25em 1em;
    border-style:none;
    background-color:rgba(210,222,259,0.9);
    border-radius:600px 600px;
    @import url('https://fonts.googleapis.com/css?family=Amatic+SC|Shadows+Into+Light');
    font-family: 'Amatic SC', cursive;
 `
const Input = styled.input
    `${style}`
const Button = styled.button
    `${style}`

class SignUp extends Component {
    state = {
        identification: false
    }
    handleSubmit = (event) => {
        event.preventDefault()
        axios.post('http://localhost:3080/users/identification', {
            email: event.target.email.value
        })
            .then((response) => {
                if (response.data.length>0) {
                    this.setState({ identification: true })
                    this.props.handleSingingSuccess(response.data)
                    console.log(response.data)
                }
            });
    }
    render() {

        if (this.state.identification === true) {
            return <Redirect to="/home" />
        } else {
            return (
                <div>
                    <form onSubmit={this.handleSubmit}>
                        <Input type="email" name="email" placeholder="enter your email" required />
                        <Input type="text" name="pseudo" placeholder="enter your pseudo" required />
                        <Button type="submit">login</Button>
                    </form>
                </div>
            )
        }
    }
}



export default SignUp;
