import './Landing.css'
import React, { useState, useEffect } from 'react';
import {Card, CardHeader, Button, CardContent, TextField, Grid} from "@mui/material";
import axios from 'axios';


function Landing(){

    const [user, setUser] = useState("");
    const [signIn, setSignIn] = useState(false);

    
    // useEffect(()=>{

    //     const fetchData = async () => {
    //         const result = await axios(
    //             'get-user',
    //         );
    //         return result;
    //     };
    //     fetchData().then(
    //         function(response){
    //             console.log("useEffect -- landing");
    //             console.log(response.data['success']);
    //             if(response.data['success']=="true"){
    //                 setUser(response.data['user']);
    //                 setSignIn(true);
    //             }else{
    //                 setSignIn(false);
    //             }
    //         }
    //     )
    // }, []);

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
    
}

export default Landing;