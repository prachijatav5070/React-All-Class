// import "./style.css"
import Header from "./header";
import Content from "./content";
import Footer from "./footer";
// const name="prachi";
// const age =23;


// const App=()=>{
//   return(
//     <h1>welcome to cybrom bhopal {name} your age is {age} and your web developer  !</h1>
//   )
// }
// export default App;

const sub =<ol>
         <li>php</li>
         <li>c++</li>
         <li>java</li>
         <li>python</li>
</ol>

const App=()=>{
  return (

    <>
   <h1>our computer subjects are : {sub}</h1>
   <Header/>
   <Content/>
   <Footer/>
    </>
   
  )
}
export default App;

