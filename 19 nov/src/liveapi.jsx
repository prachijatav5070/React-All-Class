import axios from "axios";
import { useState ,useEffect } from "react";

const LiveApi=()=>{
    const [mydata , setMydata]=useState([]);
    const loadData=()=>{
        let api="https://jsonplaceholder.typicode.com/comments";
        axios.get(api).then((res)=>{
               setMydata(res.data);
               console.log(res);
        });

        }
    useEffect(()=>{
        loadData();

    },[])
    const ans=mydata.map((key)=>{
        return(
            <>
           
            <tr>
            <td>{key.postId}</td>
            <td>{key.id}</td>
            <td>{key.name}</td>
            <td>{key.email}</td>
            <td>{key.body}</td>
            </tr>
          
            </>
        ) 
    })
    return(<>
     <h2>live api show data here  </h2>
     <table>
        <tr>
            <th>POSTID</th>
            <th>ID</th>
            <th>NAME</th>
            <th>EMAIL</th>
            <th>BODY</th>
        </tr>
        {ans}
     </table>
    </>)




    
}
export default LiveApi;