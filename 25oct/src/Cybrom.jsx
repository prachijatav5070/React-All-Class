//props is given in object form and other props.nm and props.city
///props ko is tarh se bhi de skte hain  this is a second way to pass props


//children is a keyword in react 



const Cybrom=( {name, city, cls,Name2,City2 ,children} )=>{

    return(

        <>
        {children}
        <h2>my Collage name is {name} </h2>
        <h2>my Collage city is {city} </h2>
        <h2>my Collage class is {cls} </h2>
        {children}
        <h2>Welcome This is Cybrom Component</h2>
        <h2>Name : {Name2}</h2>
        <h2>City : {City2}</h2>
        {children}
        </>
    )
}
export default Cybrom;