import { useState } from "react"

const aP=()=>{
    const[Name,setName]=useState("");
    const[Place,setPlace]=useState("");
    const[Contect,setContect]=useState("");
    const[Fees,setFees]=useState("");

   
    return(
        <>
        <h1>new application form</h1>
        Enter Name : <input type="text"  value={Name} onChange={(e)=>{setName(e.target.value)}} />
        Enter Place : <input type="text" />
        Enter contect : <input type="text" />
        Enter Fees : <input type="text" />
        </>
    )
}