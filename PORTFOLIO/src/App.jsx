import { BrowserRouter,Routes,Route } from "react-router-dom";

import Banner from "./components/banner";
import Navmenu from "./components/Nav";
// import Skills from "./pages/Skills";
// import Contact from "./pages/Contact";
// import Resume from "./pages/Resume"

const App=()=>{
    return(
        <>
       
        <BrowserRouter>

        <Navmenu/>
        <Banner/>

        <Routes>
            {/* <Route path='/' element={<Home/>}/>
            <Route path='/About' element={<About/>}/>
            <Route path='/Contact' element={<Contact/>}/>
            <Route path='/Skills' element={<Skills/>}/>
            <Route path='/Resume' element={<Resume/>}/>
             */}

           
        </Routes>


        </BrowserRouter>
         
        </>
    )
}
export default App;