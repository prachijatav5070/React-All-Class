import College from "./college";
import Cybrom from "./Cybrom";
import Cybrom2 from "./Cyborm2";
import Variable from "./variable";


const stunm="Prachi";
const stuplace="Sagar";
const stuFees=45000;
const App =()=>{
  return (
    <>
    
    <h1>Welcome!!!!!!!!!!!</h1>
    <College  nm="riya" ct="ujjain" />
   
   
    <Cybrom  name="Uit rgpv" city="Bhopal" cls="BE" Name2="radha" City2="satna">
       {/* cybrom tag ke andar ka data tabhi dikhega jab hum children keyword ko lagaenge 
        isko show karne ke liye */}
       
       <h3>Happy Diwali!!!</h3>
    </Cybrom>

    <Cybrom2 >
       <h1>hiii we are devlopers!!!</h1>
    </Cybrom2>


    <h2>Here Variable Data!!</h2>
    <Variable name={stunm} place={stuplace} />

  

    </>  )
}
export default App;