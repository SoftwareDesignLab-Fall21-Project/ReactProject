import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import NavBar from "./components/navBar";
import Landing from "./pages/Landing";
import DatasetPage from "./pages/DatasetPage";
import HardwarePage from './pages/HardwarePage';
import {Card, CardHeader, Button, CardContent, TextField} from "@mui/material";


function App() {

    const [signin, setSignin] = useState(false);

    if(!signin){
        return (
            <div>
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
                    <NavBar/>
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
