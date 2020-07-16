import React, { useState } from "react";

class Practice extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pk: { name: "pankaj", age: 25 },
      dk: { name: "dhiraj", age: 28 },
      place: "kathmandu",
      holder: { name: "", age: 0 },
    };
  }

  chanegPK = () => {
    if (this.state.holder.name === "") {
      this.setState({
        holder: this.state.pk,
        pk: { ...this.state.pk, name: "kishor" },
      });
    } else {
      this.setState({
        holder: this.state.pk,
        pk: this.state.holder,
      });
    }
  };

  render() {
    return (
      <div>
        <div
          onClick={() => {
            this.chanegPK();
          }}
        >
          {" "}
          {this.state.pk.age}
        </div>
        <div
          onClick={() => {
            this.chanegPK();
          }}
        >
          {" "}
          {this.state.pk.name}
        </div>
      </div>
    );
  }

  /*let style=()=>{
  return(
  setA("bg-danger text-white"))
 }
  return(
 <button className={a} onClick={()=>{style()}}>helloooo
 </button>   
  )/=*/
}
export default Practice;
