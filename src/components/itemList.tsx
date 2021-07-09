import React, {useEffect} from "react";
import {Grid } from '@material-ui/core';
import Item from './item/item';
import { setProducts } from "../redux/actions/productActions";
import {RootStateOrAny, useDispatch, useSelector } from 'react-redux'
import axios from 'axios';

const ItemPage = () => {
        const items = useSelector((state: RootStateOrAny) => state.allProducts.items);
        const dispatch = useDispatch();
        const handleItems = async() =>{
            const res = await axios.get("https://backendapi.turing.com/products?page=1&limit=20")
            .catch((e) => { console.log(e);});
            res && dispatch (setProducts(res.data.rows));
            console.log(items);
        };

        useEffect(()=> {handleItems()}, []);
        return (
            <Grid container justifyContent="center" spacing={3}>
            {(items).map((item) => (
                <Grid  item key={item.product_id} xs={12} sm={6} md={4} lg={3}>
                    <Item product_id={item.product_id} name={item.name} price ={item.price} thumbnail={item.thumbnail} />
                    {console.log(item.thumbnail)}
                </Grid>
            ))}
        </Grid> 
        );
    }
    

export default ItemPage;