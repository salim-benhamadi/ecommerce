import { AppBar, Toolbar, IconButton, Badge, Typography } from "@material-ui/core";
import { LocalMall } from "@material-ui/icons";
import React, { useState } from "react";
import Cart from "../Cart/cart";
import useStyles from './style';
import {createStore} from 'redux';
import {rootReducer} from "../../redux/reducers/rootReducer";


const store = createStore(rootReducer);


const Navbar = () => {
    const classes = useStyles();
    const [isItemCart, setIsItemCart] = useState(false);

    return ( 
        <div>
            <AppBar className={classes.appBar}>
                <Toolbar>
                    <Typography  className={classes.title} >SHOPMATE</Typography>
                    <IconButton  aria-label="Show car items" color="inherit"  onClick={() => setIsItemCart(true)}>
                        <Badge badgeContent={3} color="secondary">
                            <LocalMall />
                        </Badge>
                    </IconButton>
                </Toolbar>
            </AppBar>
            {isItemCart && <Cart/>}
        </div>
     );
}
 
export default Navbar;