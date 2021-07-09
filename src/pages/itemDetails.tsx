import React, { useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import {RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import { selectedProduct } from '../redux/actions/productActions';
import Navbar from '../components/Navbar/Navbar';
import useStyles from "./style";


const ItemDetails = () => {

    // getting the product id from the URL by using Parms

    const { token } = useParams<{token?: string}>();   
    // to access the selected product
    const product = useSelector((state : RootStateOrAny ) => state.product) ;
    const dispatch = useDispatch();
    console.log(product);
    // fetching the producti details
    const fetchProductDetail = async () =>{
        // making the API call
        const res = await axios.get("https://backendapi.turing.com/products/"+token).catch((e) => { console.log(e);});
    (res)&&dispatch(selectedProduct(res.data));
    };
    useEffect(()=>{
        if(token && token !=="") fetchProductDetail();
    },[token]);


    const classes = useStyles();
    return (
        <div>
        <Navbar/>
        <div className={classes.card} >
            <img src={"https://backendapi.turing.com/images/products/"+product.thumbnail} alt="Denim Jeans" />
                <h1>Tailored Jeans</h1>
                <p className={classes.price}>{product.price}</p>
                <p>Some text about the jeans..</p>
                <p><button className={classes.cardButton}>Add to Cart</button></p>
        </div>
</div>
    );
}
 
export default ItemDetails;
