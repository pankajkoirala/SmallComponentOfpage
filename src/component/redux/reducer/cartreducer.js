import {
  addtoCart,delettoCart
 } from "../const/action";
 let initialState = {
   items: [],
   error: null,
   pending: false,
 };
 
 export const cartReducer = (state = initialState, action) => {
   switch (action.type) {
     case addtoCart:
       return {
         ...state,
         pending: false,
         items: [...state.items,action.payload],
       };
     case delettoCart:
       return {
         ...state,
        items : state.items.filter((product)=>product._id!==action.payload)
       };
    
     default:
       return state;
   }
 };
 