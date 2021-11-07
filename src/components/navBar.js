import React from "react";
import {AppBar, IconButton, Toolbar, Typography, Button} from "@mui/material";
import './navBar.css'
import {Link} from "react-router-dom";

function NavBar(){
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
          </Toolbar>
        </AppBar>
    );
}

export default NavBar;