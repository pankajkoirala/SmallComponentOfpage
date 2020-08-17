import React from "react"
import {connect} from "react-redux"
import {addtoCart,delettoCart} from "../../const/action" 



const CartItem=(props)=>{
  return(
    <div>
{props.cartItem.map((arg)=>{
  return(
  <div onClick={()=>{props.deletItem(arg._id)}} >{arg.productName}</div>
  )
})}
    </div>
  )
}
const mapStateToProps = (state) => ({
  cartItem:state.cart.items
});

const mapDispatchToProps = (dispatch) => ({
  deletItem:(data)=>dispatch({type:delettoCart,payload:data})

  
});

export default connect(mapStateToProps, mapDispatchToProps)(CartItem);