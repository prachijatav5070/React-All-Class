import { useState } from "react";

const Multi=()=>{
    const[input,setInput]=useState({}) //input={} blanck object
    const handleInput=(e)=>{
        let name=e.target.name;
        let value=e.target.value;
        setInput(values=>({...values,[name]:value}))
        console.log(input);
    }
    
    return(
        <>
        <h1>Multiple aplication form!</h1>
        Enter rollno : <input type="text" name="Rollno" onChange={handleInput} />
        <br />
        Enter name : <input type="text" name="Rollno" onChange={handleInput} />
        <br />
        Enter city: <input type="text" name="Rollno" onChange={handleInput} />
        <br />
        Enter fees : <input type="text" name="Rollno" onChange={handleInput} />
        <br />
        <button onClick={handleInput}> save </button>
        </>
    )
}
export default Multi;