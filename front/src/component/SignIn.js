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

class SignIn extends Component {
    state = {
        inscription: false
    }

    handleSubmit = (event) => {
        event.preventDefault()
        axios.post('http://localhost:3080/users/inscription', {
            pseudo: event.target.pseudo.value,
            email: event.target.email.value
        })
            .then((response) => {
                if (response.status === 200) {
                    this.setState({ inscription: true })
                    console.log(response);
                }
            });
    }
    render() {
        if (this.state.inscription === true) {
            return <Redirect to="/signup" />
        } else {
            return (
                <div>
                    <form onSubmit={this.handleSubmit}>
                        <Input type="email" name="email" placeholder="enter your email" required />
                        <Input type="text" name="pseudo" placeholder="enter your pseudo" required />
                        <Button type="submit">Login</Button>
                    </form>
                </div>
            )
        }
    }
}
export default SignIn;
