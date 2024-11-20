 const Student=[
    {roll:121,
     name:"prachi",
     city:"bhopal"
    },
    {roll:122,
     name:"ayushi",
     city:"bhopal"
    },
    {roll:123,
     name:"nidhi",
     city:"bhopal"
    },
 ]
 const Stu=()=>{
    const ans=Student.map((key)=>{
            return(
                <>
                <tr>
                    <td>{key.roll} </td>
                    <td>{key.name} </td>
                    <td>{key.city} </td>
                </tr>
                </>
            )
    })
    return(
        <>
        <table>
            <th> Rollno </th>
            <th> Name </th>
            <th> City </th>
            {ans}
        </table>
        </>
    )
 }
 export default Stu;