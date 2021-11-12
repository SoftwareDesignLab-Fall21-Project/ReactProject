import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import React, { useState, useEffect, useFocusEffect } from 'react';
import NavBar from "./components/navBar";
import Landing from "./pages/Landing";
import DatasetPage from "./pages/DatasetPage";
import HardwarePage from './pages/HardwarePage';
import {Card, CardHeader, Button, CardContent, TextField} from "@mui/material";
import axios from 'axios';
import { withRouter} from 'react-router-dom';

function App() {

    const [loginResponse, setLoginResponse] = useState(null);
    const [signin, setSignin] = useState(false);


    const handleSubmitLogin = (Event) => {
        Event.preventDefault();
        const data = new FormData(Event.target);

        fetch('/login', {
          method: 'POST',
          body: data,
        }).then((response) => {
            setLoginResponse(response);
        });
    }

    const handleSubmitRegister = (Event) => {
        Event.preventDefault();
        const data = new FormData(Event.target);

        fetch('/register', {
          method: 'POST',
          body: data,
        }).then((response) => {
            setLoginResponse(response);
        });
    }

    useEffect(()=>{

        const fetchData = async () => {
            const result = await axios(
                'get-user',
            );
            return result;
        };
        fetchData().then(
            function(response){
                console.log("useEffect -- App");
                console.log(response.data['success']);
                if (response.data['success'] === "true") {
                    setSignin(true);
                }else{
                    setSignin(false);
                }
            }
        )
    }, [signin, loginResponse]);


    if(!signin){
        return (
            <div>
                <Card className="sign-in-dialog">
                    <CardContent>
                        <h4>Already have an account?</h4>
                        <form id="loginForm" action="/login" method="POST" onSubmit={handleSubmitLogin}>
                            <TextField className="username-password" id="standard-basic" label="Username"
                                       variant="standard" name="username"/>
                            <TextField className="username-password" id="standard-basic" label="Password"
                                       variant="standard" name="password"/>
                            <div id="button-wrapper">
                                <Button id="login-button" variant="outlined" type="submit" form="loginForm">
                                    Log In
                                </Button>
                            </div>
                        </form>
                        <h4>New User?</h4>
                        <form id="signupForm" action="/signup" method="POST" onSubmit={handleSubmitRegister}>
                            <TextField className="username-password" id="standard-basic" label="New Username"
                                       variant="standard" name="newuser"/>
                            <TextField className="username-password" id="standard-basic" label="New Password"
                                       variant="standard" name="newpass"/>
                            <div id="button-wrapper">
                                <Button id="login-button" variant="outlined" type="submit">
                                    Sign Up
                                </Button>
                            </div>
                        </form>
                    </CardContent>
                </Card>
                <Button id="login-button" variant="contained" onClick={() => {
                    setSignin(true);
                }}>Development Signin</Button>
            </div>
        );
    }else{
        return (
            <>
                <Router>
                    <NavBar
                        SignIn = {signin}
                        // history = {history}
                    />
                    <div id="page-container">
                    </div>
                    <Switch>
                        <Route path="/" exact component={Landing} />
                        <Route path="/datasets">
                            <DatasetPage/>
                        </Route>
                        <Route path="/hardware" exact component={HardwarePage}/>
                    </Switch>
                
                </Router>
                

            </>
        );
    }

    
}

export default App;
