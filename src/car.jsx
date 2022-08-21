import React from "react"

function Car(props) {
   

    const getNum =()=>{
       console.log("clicked")
    }
   
      
       return(
           <>
            <h2>I am a {props.color} Car!</h2>,
       <button onClick={getNum}>click me</button>
       </>
     )}
//   export default Car  