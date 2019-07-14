import React, { Component } from "react";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from "@material-ui/core/InputBase";

class NavBar extends Component {

    render() {
        return (
            <AppBar position="static" color="default">
                <Toolbar>
                    <Typography variant="h6" color="inherit">
                        <span>Pass</span><span style={{color: "#6cb86a"}}>Lock</span>
                    </Typography>
                </Toolbar>
                <div className={"classes.search"}>
                    <div className={"searchIcon"}>
                        <SearchIcon />
                    </div>
                    <InputBase
                        placeholder="Search…"
                        inputProps={{ 'aria-label': 'Search' }}
                    />
                </div>
            </AppBar>
        );
    }
}

export default NavBar;
