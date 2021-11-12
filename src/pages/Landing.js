import './Landing.css'
import React, { useState, useEffect } from 'react';
import {Card, CardHeader, Button, CardContent, TextField, Grid} from "@mui/material";
import axios from 'axios';


function Landing(){

    const [user, setUser] = useState("");
    const [signIn, setSignIn] = useState(false);

    
    useEffect(()=>{

        const fetchData = async () => {
            const result = await axios(
                'get-user',
            );
            return result;
        };
        fetchData().then(
            function(response){
                console.log("useEffect -- landing");
                console.log(response.data['success']);
                if(response.data['success']=="true"){
                    setUser(response.data['user']);
                    setSignIn(true);
                }else{
                    setSignIn(false);
                }
            }
        )
    }, []);

    if(signIn){
            return (
            <div>
                <h1>Welcome {user}</h1>
                <Grid container direction={"column"} alignItems={"center"} justify={"center"}>
                    {/* <p> Use existing project</p>
                    <TextField
                        id="standard-basic"
                        label="Project Name"
                        variant="standard"/>
                    <Button
                        sx={{m: 1}}
                        variant={"outlined"}
                        size={"small"}>
                        submit
                    </Button> */}
                    <Card>
                        <CardContent>
                            <div className="spacing-2">
                                <p> Create new project</p>
                            </div>
                            <div className="spacing-1">
                            <TextField
                                id="standard-basic"
                                label="Project Name"
                                variant="standard"/>
                            </div>
                            <div className="spacing-1">
                                <Button
                                    sx={{m: 1}}
                                    variant={"outlined"}
                                    size={"small"}>
                                    submit
                                </Button>
                            </div>
                        </CardContent>
                    </Card>
                </Grid>
            </div>
        );
    }else{
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
                    setSignIn(true);
                }}>Development Signin</Button>
            </div>
        );
    }
    
    
}

export default Landing;