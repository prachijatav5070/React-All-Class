import { useState } from "react"

const Counter=()=>{
    const[count,setcount]=useState(0);
const myInc=()=>{
    setcount(count+1)
}
const myDec=()=>{
    if(count<=0){
        alert("you can't use decrement less then zero")
    }
    else{
        setcount(count-1)
    }
}
const myRes=()=>{
 setcount(0)
}

    return(
        <>
        <center>
        <h1>counter program : {count}</h1>
        <button onClick={myInc}>increment</button>
        <button onClick={myDec}>dicrement</button>
        <button onClick={myRes}>reset</button>
        </center>
       
        </>
    )
}
export default Counter;