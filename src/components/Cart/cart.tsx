import React, { useEffect, useState } from "react";
import { Button, IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@material-ui/core";
import useStyles from "./style";
import DeleteIcon from '@material-ui/icons/Delete';
import { Clear } from "@material-ui/icons";

const Cart = () => {
    const [Cart, setCart] = useState([]);
    useEffect(() => handleUpdateData(), [] )

    function handleUpdateData(){
        fetch('https://backendapi.turing.com/shoppingcart/2')
        .then(res => res.json())
        .then(data => setCart(data))
    }
   function handleDelete (itemId: number){
        fetch("https://backendapi.turing.com/shoppingcart/removeProduct/"+itemId, {
            method:'DELETE'
        })
        .then(() =>handleUpdateData())
    }

    const classes = useStyles();
    return (
        <div className={classes.popupView}>
            <div className={classes.popupCard}>
                <div className={classes.product}>
                <IconButton  aria-label="clear" > <Clear /> </IconButton>
                                <TableContainer component={Paper}>
                 <Typography variant="h4" >{Cart.length} Items in your Cart</Typography>
                    <Table className ={classes.tablePreview} aria-label="simple table">
                        <TableHead>
                        <TableRow>
                            <TableCell>item</TableCell>
                            <TableCell align="right">Size</TableCell>
                            <TableCell align="right">Qunatity</TableCell>
                            <TableCell align="right">Price</TableCell>
                        </TableRow>
                        </TableHead>
                        <TableBody>
                        {Cart.map((row) => (
                            <TableRow key={row.item_id}>
                            <TableCell className={classes.itemDetails} component="th" scope="row">
                                <img src={"https://backendapi.turing.com/images/products/"+row.image} width="100px" height='100px'  alt={row.attributes} />
                                <div className={classes.itemName}>
                                <Typography variant="h5">{row.name}</Typography>
                                <Typography variant="h6">{row.attributes}</Typography>
                                <Button variant="outlined"  color="secondary" onClick={() => handleDelete(row.item_id) } startIcon={<DeleteIcon/>}> Remove </Button>
                                </div>
                            </TableCell>
                            <TableCell align="right">{row.subtotal}</TableCell>
                            <TableCell align="right">{row.quantity}</TableCell>
                            <TableCell align="right">{row.price}</TableCell>
                            </TableRow>
                        ))}
                        </TableBody>
                    </Table>
                    </TableContainer>
                </div>
            </div>
        </div>
     );
}
 
export default Cart;