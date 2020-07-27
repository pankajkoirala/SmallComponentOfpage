import React from "react"
import {Link} from "react-router-dom"

let Nav=()=>{
  return(
    <div className="bg-secondary font-weight-bold">
    <div  className="m-4 text-dark">  <Link to="/">home</Link></div>
    {/* <div  className="m-4 text-dark"> <Link  to="/display">display</Link></div> */}
    </div>
  ) 
}
 export default Nav