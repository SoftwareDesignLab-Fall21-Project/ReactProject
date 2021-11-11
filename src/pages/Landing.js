import './Landing.css'
import {Card, CardHeader, Button, CardContent, TextField} from "@mui/material";
import React, { useState, useEffect } from 'react';


function Landing(){

    const [color, setColor] = useState("green");

    return (
        <div>
            <Card className="sign-in-dialog">
                <CardContent>
                    <h4>Already have an account?</h4>
                    <TextField className="username-password" id="standard-basic" label="Username" variant="standard" />
                    <TextField className="username-password" id="standard-basic" label="Password" variant="standard" />
                    <h4>New User?</h4>
                    <TextField className="username-password" id="standard-basic" label="New Username" variant="standard" />
                    <TextField className="username-password" id="standard-basic" label="New Password" variant="standard" />
                </CardContent>
            </Card>
        </div>
    );
}


export default Landing;