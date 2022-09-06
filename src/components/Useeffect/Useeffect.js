import React, {useEffect, useState} from 'react'



const Useeffect = () => {

    const [value,setValue]= useState(0);


    useEffect(()=>{
        // console.log('hello world');

        document.title= `${value} number of clicks`

    }, [value]);



  return (
    <div className='maindiv'>
        <div>
            <h1>use effect</h1>
            <h2>{value}</h2>
            <button onClick={()=>
            setValue(value+1)}>increase value</button>

        </div>
      
    </div>
  )
}

export default Useeffect
