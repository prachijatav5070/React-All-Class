// import { BrowserRouter,Routes } from "react-router-dom";
import Cybrom from "./Cybrom";
import Stu from "./Table";
const stuname="prachi";
const stucity="bhopal";
const sturoll=121;
const App=()=>{

  return(
<>
{/* <BrowserRouter>
<Routes> */}
  <h2>welcome</h2>
  <Cybrom Rollno={sturoll} City={stucity} Name={stuname}></Cybrom>

    <Stu/>
{/* 
</Routes>
</BrowserRouter> */}

</>
  )
}
export default App;