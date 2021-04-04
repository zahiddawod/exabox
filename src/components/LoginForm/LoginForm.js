import React, { Component } from 'react';
import { AccountCircleSharp, Lock } from '@material-ui/icons';
import { FormControl, InputAdornment, TextField, Button, Typography, Link } from '@material-ui/core';
import './LoginForm.css';
import logo from '../../logo-tr.png';

class LoginForm extends Component { 
    render() {
        let isLoggedIn = false;

        const submitHandler = (e) => {
            e.preventDefault();

        }

        return (
            <div className="LoginForm">
                <FormControl>
                    <img src={logo} alt="logo" style={{marginBottom: "50px"}}/>
                    <ul>
                    <li><TextField id="username" label="Username" InputProps={{startAdornment: (<InputAdornment position="start"><AccountCircleSharp style={{color: "#c3c6c9"}} /></InputAdornment>)}}  /></li>
                    <br />
                    <li><TextField id="password" label="Password" type="password" InputProps= {{startAdornment: (<InputAdornment position="start"><Lock style={{color: "#c3c6c9"}} /></InputAdornment>)}} /></li>
                    <br />
                    <li><Button className="LoginButton" color="primary" size="large">Login</Button></li>
                    </ul>
                </FormControl>
                <br /><br />
                <Typography >Don't have an account? <Link href="#" onClick={(e) => e.preventDefault()} variant="body2">Sign Up</Link>!</Typography>
            </div>
        )
    }
}

export default LoginForm;