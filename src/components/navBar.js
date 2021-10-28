import React from "react";
import {AppBar, IconButton, Toolbar, Typography} from "@mui/material";
import './navBar.css'
import {Link} from "react-router-dom";

function NavBar(){
    return (
        <AppBar className='navbar' position="static">
            <Toolbar variant="dense">

                <Typography variant="h6" color="inherit" component="div">
                    <Link to="/" className="nav-link">Home</Link>
                </Typography>
                <Typography variant="h6" color="inherit" component="div">
                    <Link to="/datasets" className="nav-link">Datasets</Link>
                </Typography>
          </Toolbar>
        </AppBar>
    );
}

export default NavBar;