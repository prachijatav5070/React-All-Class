import { useEffect, useState } from "react";
import LiveApi from "./liveapi";

const App=()=>{

  //3 types of useEffect dependency =============
  /*
  1.  runs every render  
  2. an empty array 
  3. props or state values
  */


  const [cnt,setCnt]=useState(0);
  const [multi, setMulti]=useState(0);
  const mycoutner=()=>{
    setCnt(cnt+1);
  }
  // useEffect(()=>{
  //  Sett
  // })
  useEffect(()=>{
    setMulti(cnt*2);
  },[cnt])
  return(
    <>
    <h3>1. my counter : {cnt}</h3>
    <h2>2. my counter : {cnt} </h2>
    <h1> 3. my counter :{cnt} </h1>
    <h2> 3. multipication : {multi}</h2>

    <button onClick={mycoutner}> click here </button>
    <br /><br />
    <LiveApi></LiveApi>
    </>
  )
}
export default App;