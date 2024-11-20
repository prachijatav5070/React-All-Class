import Studata from "./studentdata"
const ans= Studata.map((key)=>{
 return(
    <>
<tr>
  <td>{key.rollno}</td>
  <td>{key.name}</td>
  <td>{key.fee}</td>
  <td>{key.city}</td>
 </tr>     
    </>
  )
})

const App=()=>{
  return(
<>
<h1>welcome </h1>
<table>
  <tr>
    <th>Rollno</th>
    <th>Name</th>
    <th>City</th>
    <th>fee</th>
  </tr>
  {ans}
</table>
</>
  )
}

export default App;