import React, { useState } from 'react'



const Usestateobject= ()=>{

    const changeState= () =>{
        setPerson({...person,name:'abed',
    age:60});
    }

    const[person, setPerson]= useState({
        name:'ruto',
        age:55,
        gender:'male'

    })

    return(
        <div className='maindiv'>
        <div>
            <h1>{person.name}</h1>
            <h4>{person.age}</h4>
            <h4>{person.gender}</h4>
            <button onClick={changeState}>change state</button>
            
        </div>
        </div>
    )


}



export default Usestateobject