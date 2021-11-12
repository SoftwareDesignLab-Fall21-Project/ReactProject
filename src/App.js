import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import NavBar from "./components/navBar";
import Landing from "./pages/Landing";
import DatasetPage from "./pages/DatasetPage";
import HardwarePage from './pages/HardwarePage';
import {Card, CardHeader, Button, CardContent, TextField} from "@mui/material";
import axios from 'axios';

function App() {

    const [signin, setSignin] = useState(false);

    useEffect(()=>{

        const fetchData = async () => {
            const result = await axios(
                'get-user',
            );
            return result;
        };
        fetchData().then(
            function(response){
                console.log(response.data['success']);
                if(response.data['success']=="true"){
                    setSignin(true);
                }
            }
        )
    }, []);


    if(!signin){
        return (
            <div>
                <Card className="sign-in-dialog">
                    <CardContent>
                        <h4>Already have an account?</h4>
                        <form id="loginForm" action="/login" method="POST">
                            <TextField className="username-password" id="standard-basic" label="Username" variant="standard" name="username"/>
                            <TextField className="username-password" id="standard-basic" label="Password" variant="standard" name="password"/>
                            <div id="button-wrapper">
                                <Button id="login-button" variant="outlined" type="submit" form="loginForm">Log In</Button>
                                
                            </div>
                        </form>
                        <h4>New User?</h4>
                        <form id="signupForm" action="/signup" method="POST">
                            <TextField className="username-password" id="standard-basic" label="New Username" variant="standard" name="newuser" />
                            <TextField className="username-password" id="standard-basic" label="New Password" variant="standard" name="newpass"/>
                            <div id="button-wrapper">
                                <Button id="login-button" variant="outlined" type="submit">Sign Up</Button>
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
