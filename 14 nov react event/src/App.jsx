import Event from "./event"

const App=()=>{
  const myname=(nm)=>{
    alert(`my name is : ${nm}`)
  }
  //jb bhi funciton me parameter pass karte hai to event me arrow function pass karna hota hai
    return(
      <>
      <h1>welcome</h1>
      <button onClick={()=>{myname("Ayushi!")}}>click here</button>
      <Event/>
      
      </>
    )
    
    const getval=(e)=>{
      console.log(e);
      let nm=e.target.name;
      let val=e.target.value;
      alert("Name :"+nm+"value : "+val);

  }
  return(
      <>
      <h1>Event throug value and name</h1>
      <button onClick={getval}name="btn1" value="valuenew">click here</button>
       </>
  )
  }

export default App;