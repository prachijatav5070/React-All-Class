

Const EventN=()=>{

    const myval=(e)=>{
        console.log(e);
        let nm=e.target.name;
        let val=e.target.value;
        alert("Name :"+nm+"value : "+val);

    }
    return(
        <>
        <h1>Event throug value and name</h1>
        <button onClick={myval}name="btn1" value="valuenew">click here</button>
        
        </>
    )
}
export default EventN;