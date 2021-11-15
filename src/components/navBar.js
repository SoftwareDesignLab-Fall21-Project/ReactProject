import React, {useContext} from "react";
import {AppBar, Toolbar, Typography, Button} from "@mui/material";
import './navBar.css'
import {Link} from "react-router-dom";
import {signedInContext} from "../App.js";

function NavBar() {
    const logout = useContext(signedInContext)[2];

    return (
        <AppBar className='navbar' position="static">
            <Toolbar variant="dense">
                <Typography variant="h6" color="inherit" component="div" className={'nav-button'}>
                    <Link to="/" className="nav-link">
                        <Button variant="outlined" color="primary">Home</Button>
                    </Link>
                </Typography>
                <Typography variant="h6" color="inherit" component="div" className={'nav-button'}>
                    <Link to="/datasets" className="nav-link">
                        <Button variant="outlined" color="info">Datasets</Button>
                    </Link>
                </Typography>
                <Typography variant="h6" color="inherit" component="div" className={'nav-button'}>
                    <Link to="/hardware" className="nav-link">
                        <Button variant="outlined" color="info" >Hardware Sets</Button>
                    </Link>
                </Typography>
                <Typography variant="h6" color="inherit" component="div" className={'nav-button'}>
                    <Link to="/" className="nav-link">
                        <Button variant="outlined" color="info"
                            onClick={() => {
                                logout();
                            }}>
                            Logout
                           </Button>
                    </Link>
                </Typography>
            </Toolbar>
        </AppBar>
    );
}
export default NavBar;