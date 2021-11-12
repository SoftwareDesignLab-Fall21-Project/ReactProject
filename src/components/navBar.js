import React, {useState} from "react";
import {AppBar, IconButton, Toolbar, Typography, Button, CardContent, TextField, Card} from "@mui/material";
import './navBar.css'
import {Link} from "react-router-dom";
import { Redirect } from 'react-router';
import axios from 'axios';

function NavBar({ SignIn }) {
    if (SignIn) {
        return (
            <AppBar className='navbar' position="static">
                <Toolbar variant="dense">
                    <Typography variant="h6" color="inherit" component="div">
                        <Link to="/" className="nav-link">
                            <Button variant="outlined" color="primary">Home</Button>
                        </Link>
                    </Typography>
                    <div style={{marginRight: "1%"}}/>
                    <Typography variant="h6" color="inherit" component="div">
                        <Link to="/datasets" className="nav-link">
                            <Button variant="outlined" color="info">Datasets</Button>
                        </Link>
                    </Typography>
                    <div style={{marginRight: "1%"}}/>
                    <Typography variant="h6" color="inherit" component="div">
                        <Link to="/hardware" className="nav-link">
                            <Button variant="outlined" color="info">Hardware Sets</Button>
                        </Link>
                    </Typography>
                    <div style={{marginRight: "1%"}}/>
                    <Typography variant="h6" color="inherit" component="div">
                        <Link to="/landing" className="nav-link">
                            <Button variant="outlined" color="info"
                                onClick={() => {
                                    const fetchData = async () => {
                                        const result = await axios(
                                            'logout',
                                        );
                                        return result;
                                    };
                                    fetchData().then(
                                        function(response){
                                            console.log(response.data['success'] + '-- nav');
                                            SignIn = (response.data['success']);
                                            // <Redirect to ="http://localhost:3000/datasets" />
                                            var Router = require('react-router');
                                            Router.browserHistory.push('http://localhost:3000/datasets');
                                        }
                                    )
                                    }}>
                                Logout
                               </Button>
                        </Link>
                    </Typography>
                </Toolbar>
            </AppBar>
        );
    }
    else{
        return (
        <Card className="sign-in-dialog">
            <CardContent>
                <h4>Already have an account?</h4>
                <TextField className="username-password" id="standard-basic" label="Username" variant="standard" />
                <TextField className="username-password" id="standard-basic" label="Password" variant="standard" />
                <div id="button-wrapper">
                    <Button id="login-button" variant="outlined">Sign In</Button>
                </div>
                <h4>New User?</h4>
                <TextField className="username-password" id="standard-basic" label="New Username" variant="standard" />
                <TextField className="username-password" id="standard-basic" label="New Password" variant="standard" />
                <div id="button-wrapper">
                    <Button id="login-button" variant="outlined">Sign Up</Button>
                </div>
            </CardContent>
            <Button id="login-button" variant="contained" onClick={() => {
                SignIn = true;
            }}>Development Signin</Button>
        </Card>
        )
    }
}
export default NavBar;