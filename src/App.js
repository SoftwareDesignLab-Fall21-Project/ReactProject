import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import React, {createContext, useEffect, useState} from 'react';
import NavBar from "./components/navBar";
import Landing from "./pages/Landing";
import DatasetPage from "./pages/DatasetPage";
import HardwarePage from './pages/HardwarePage';
import {Button, Card, CardContent, TextField} from "@mui/material";
import axios from 'axios';


export const signedInContext = createContext();

function App() {

    const [loginResponse, setLoginResponse] = useState(null);
    const [signin, setSignin] = useState(false);
    const [dummy, setDummy] = useState(false);

    const handleSubmitLogin = (Event) => {
        Event.preventDefault();
        const data = new FormData(Event.target);

        fetch('/login', {
          method: 'POST',
          body: data,
        }).then((response) => {
            console.log("login");
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

    const logout = (Event) => {
        fetch('/logout', {
          method: 'GET'
        }).then((response) => {
            console.log("logout");
            setLoginResponse(response);
        });
    };

    useEffect(()=>{
        const fetchData = async () => {
        const result = await axios(
            'get-user',
        );
        return result;
        };
        fetchData().then(
            function(response){
                if (response.data['success'] === "true") {
                    setSignin(true);
                }else{
                    setSignin(false);
                }
            }
        )

    }, [loginResponse]);


    if(!signin){
        return (
            <div>
                <Card className="sign-in-dialog">
                    <CardContent>
                        <form id="loginForm" action="/login" method="POST" onSubmit={handleSubmitLogin}>
                            <h4>Already have an account?</h4>
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

                        <form id="signupForm" action="/signup" method="POST" onSubmit={handleSubmitRegister}>
                            <h4 className="centered-form-bold">New User?</h4>
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
            </div>
        );
    }else{
        return (
            <>
                <signedInContext.Provider value={[signin, setSignin, logout]}>
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
                </signedInContext.Provider>
            </>
        );
    }

    
}

export default App;

