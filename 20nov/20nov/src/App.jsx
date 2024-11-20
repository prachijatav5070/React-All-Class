import axios from "axios";
import { useState, useEffect } from "react";
import "./style.css";
const App=()=>{

  const[mydata, setMydata]=useState([]);
  const loadData=()=>{
    let api="http://localhost:3000/ Students";
    axios.get(api).then((res)=>{
      setMydata(res.data);
    })
    console.log(res.data)
  }
  const ans=mydata.map((key)=>{
    return(
      <>
     
      <tr>
        <td> {key.rollno} </td>
        <td> {key.name} </td>
        <td> {key.city} </td>
        <td> {key.fees} </td>
      </tr>
      </>
    )
  });

  return(
    <>
     <h2>Display data here !!</h2>
     <button onClick={loadData}>Show Data</button>
     <br />
     <br />
    <table >
      <tr >
        <th>RollNo</th>
        <th>Name</th>
        <th>City</th>
        <th>Fees</th>
      </tr>
      {ans}
    </table>
    
    </>
  )
}
export default App;