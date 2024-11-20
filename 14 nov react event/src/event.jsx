
const Event=()=>{
    const display=(e)=>{

        alert("Hello friends Event :"+e.type);
    }
    return(
        <>
        <h1>welcome!!</h1>
        <button onClick={display}>click here!</button>
        </>
    )
}
export default Event;