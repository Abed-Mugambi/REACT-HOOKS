import React, { useState } from 'react'



const Usestateobjecttwo= ()=>{

    const changeState= () =>{
        setHuman({...human,name:'trump',
    age:70});
    }

    const[human, setHuman]= useState({
        name:'donald',
        age:65,
        gender:'male'

    })

    return(
        <div className='maindiv'>
        <div>
            <h1>{human.name}</h1>
            <h4>{human.age}</h4>
            <h4>{human.gender}</h4>
            <button onClick={changeState}>change state</button>
            
        </div>
        </div>
    )


}



export default Usestateobjecttwo