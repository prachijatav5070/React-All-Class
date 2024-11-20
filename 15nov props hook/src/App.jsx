import { useState } from "react"
import Counter from "./counter";
const App=()=>{
  const [city, setcity]=useState("Bhopal");
  const [home,sethome]=useState("sagar");
  const[color,SetColor]=useState("red");
const myval=()=>{
  setcity("Indore")
}

  return(

    <>
    <h1>welcome to : {city} </h1>
    <button onClick={myval}>click here</button>
    <h2>my home at : {home}</h2>
    <button onClick={()=>{sethome("bhopal")}}>press</button>


    <h1 style={{color:color}}>Color Change</h1>
    <button onClick={()=>{SetColor("blue")}}>click</button>
    <button onClick={()=>{SetColor("green")}}>click</button>
    <button onClick={()=>{SetColor("orange")}}>click</button>
    
    <Counter/>
    
    </>

  )
}
export default App;