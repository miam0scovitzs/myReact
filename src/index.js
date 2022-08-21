import React,{useState} from "react"
import reactDOM  from "react-dom"
import index from "./index.css"


const App =(props)=>{

const [count,setCount]=useState(1)

const IncVal=()=>{

 setCount(count+1)
    //console.log("clicked");
    
}




 
return (
    <>
    <div>
    <h1>{count}</h1>
    <button onClick={IncVal}>click me</button>
    <h3> add with the value of 1 </h3>
    <h4>get date={props.time}</h4>
    </div>
    </>
)
}

reactDOM.render(<App time ="12pm"/> ,
    document.getElementById("root"))
