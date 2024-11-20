import { useState } from "react"
import Multi from "./multipleiput";

const App=()=>{

  const[name,setName]= useState("");
  const[city,setCity]=useState("");
  const handleSubmit=()=>{
  alert(" Name : "+name+" | City : "+city);
}
  return(
    <>

    
    <h1>application form</h1>
    Enter name: <input type="text"  value={name} onChange={(e)=>{setName(e.target.value)}}/>
   
    <br />
    Enter city: <input type="text" value={city} onChange={(e)=>{setCity(e.target.value)}} />
    <br />
    <button onClick={handleSubmit}>save</button>
    <br /><br /><br />
    <Multi></Multi>
    
    </>
  )
}
export default App;