import React, {createContext, useContext, useState} from "react";
import {AppBar, IconButton, Toolbar, Typography, Button, CardContent, TextField, Card} from "@mui/material";
import './navBar.css'
import {Link, useHistory} from "react-router-dom";
import { Route , withRouter} from 'react-router-dom';
import axios from 'axios';
import {signedInContext} from "../App.js";

function NavBar() {
    const signin = useContext(signedInContext)[0];
    const setSignIn = useContext(signedInContext)[1];
    if (signin) {
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
                        <Link to="/" className="nav-link">
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
<<<<<<< HEAD
                                            SignIn = (response.data['success']);
                                            // <Redirect to ="http://localhost:3000/datasets" />
                                            //history.push("/");
=======
                                            setSignIn(response.data['success']);
                                            // var Router = require('react-router');
                                            // Router.browserHistory.push('/datasets');
>>>>>>> 1349ecee02548637395ce4283150fad2bb809b00
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
                setSignIn(true);
            }}>Development Signin</Button>
        </Card>
        )
    }
}
export default NavBar;