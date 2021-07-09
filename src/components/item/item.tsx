import React, {  useState } from "react";
import { Link } from "react-router-dom";
import {Card, Typography,CardMedia,Button } from '@material-ui/core';
import useStyles from './style';


interface Props {
    product_id : number;
    name : string;
    price: number;
    thumbnail : string;
}
function handleAddToCart (productID, name){
     fetch("https://backendapi.turing.com/shoppingcart/add",{
         method:'POST',
         headers:{'Accept': 'application/json', "Content-Type": "application/json"},
         body: JSON.stringify('2',productID, name)
     })
}

const Item = ({product_id, name, price, thumbnail}:Props) => {
    const [isHovering, setIsHovering] = useState(false);
    const classes = useStyles();
    return (
        <Card className={classes.root} onMouseEnter={()=>( setIsHovering(true))} onMouseLeave={()=>( setIsHovering(false))}>
            {isHovering&&<div className={classes.isHover} > <Button onClick={()=>handleAddToCart(product_id,name)} variant="contained" color="secondary" >Add to Cart</Button></div>}
            <Link to ={`/item/${product_id}`}>
            <Typography  variant="h5" gutterBottom align ="center"> {name}</Typography>
            <CardMedia className ={classes.media} image={"https://backendapi.turing.com/images/products/"+thumbnail} title ={name}/>
            <Typography className= {classes.CardContent} variant="h5" color ='secondary' gutterBottom align ="center">{price}</Typography>
            </Link>
        </Card>

      );
    }
export default Item;