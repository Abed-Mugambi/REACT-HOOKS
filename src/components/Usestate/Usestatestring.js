import React, {useState} from 'react'

const Usestatestring = ()=>{

    const [text, setText]= useState('')

    // const changeState= ()=>{
    //     // setText('RUTO')
    //     if(text=== ''){
    //         setText('ruto')
    //     }
    //     else{
    //         setText('')
    //     }
    // }

    const newState= ()=>{
        if(text=== ''){
            setText('my react example')
        }
        else{
            setText('')
        }
    }
    



    return (
        <div className='maindiv'>
            <div>
            <h1>use state basics</h1>
            <h4>{text}</h4>
            {/* <button onClick={changeState}>change state</button> */}

            <button onClick={newState}>my example</button>


            </div>
           

        </div>
    )
}

export default Usestatestring