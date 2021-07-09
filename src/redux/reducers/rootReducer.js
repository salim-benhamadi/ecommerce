import { type } from "os";
import { ActionTypes } from "../constants/action-types";

const initState = {
    items:[{"product_id":1,"name":"Arc d'Triomphe","description":"This beautiful and iconic T-shirt will no doubt lead you to your own triumph.","price":"14.99","discounted_price":"0.00","thumbnail":"arc-d-triomphe-thumbnail.gif"},{"product_id":2,"name":"Chartres Cathedral","description":"\"The Fur Merchants\". Not all the beautiful stained glass in the great cathedrals depicts saints and angels! Lay aside your furs for the summer and wear this beautiful T-shirt!","price":"16.95","discounted_price":"15.95","thumbnail":"chartres-cathedral-thumbnail.gif"},{"product_id":3,"name":"Coat of Arms","description":"There's good reason why the ship plays a prominent part on this shield!","price":"14.50","discounted_price":"0.00","thumbnail":"coat-of-arms-thumbnail.gif"},{"product_id":4,"name":"Gallic Cock","description":"This fancy chicken is perhaps the most beloved of all French symbols. Unfortunately, there are only a few hundred left, so you'd better get your T-shirt now!","price":"18.99","discounted_price":"16.99","thumbnail":"gallic-cock-thumbnail.gif"},{"product_id":5,"name":"Marianne","description":"She symbolizes the \"Triumph of the Republic\" and has been depicted many different ways in the history of France, as you will see below!","price":"15.95","discounted_price":"14.95","thumbnail":"marianne-thumbnail.gif"},{"product_id":6,"name":"Alsace","description":"It was in this region of France that Gutenberg perfected his movable type. If he could only see what he started!","price":"16.50","discounted_price":"0.00","thumbnail":"alsace-thumbnail.gif"},{"product_id":7,"name":"Apocalypse Tapestry","description":"One of the most famous tapestries of the Loire Valley, it dates from the 14th century. The T-shirt is of more recent vintage, however.","price":"20.00","discounted_price":"18.95","thumbnail":"apocalypse-tapestry-thumbnail.gif"},{"product_id":8,"name":"Centaur","description":"There were never any lady centaurs, so these guys had to mate with nymphs and mares. No wonder they were often in such bad moods!","price":"14.99","discounted_price":"0.00","thumbnail":"centaur-thumbnail.gif"}]
}

export const rootReducer = (state = initState, {type, payload}) => {
    switch (type){
        case ActionTypes.SET_PRODUCTS:
            return {...state, items:payload};
        default:
            return state;
    }
};

export const selectedProductReducer = (state={}, {type, payload}) => {
    switch (type){
        case ActionTypes.SELECTED_PRODUCT:
            return {...state, ...payload};
        default:
            return state;
    }
};
