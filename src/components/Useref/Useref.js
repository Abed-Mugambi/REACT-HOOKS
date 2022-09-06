import React, {useRef} from 'react'
// import { useRef } from 'react'



const Useref = () => {

    const username= useRef(null)
    const useremail= useRef(null)

    const submitForm=()=>{
        console.log(username.current.value);
        console.log(useremail.current.value);
        
    }



  return (
    <div className='maindiv'>
        <div>
            <h1>use ref</h1>
            <div>
                <input type="text" 
                name="" 
                placeholder="enter your name"
                id=""
                ref={username}/>
            </div>

            <div>
            <input type="text" 
            name="" 
            placeholder="enter your email"
            id=""
            ref={useremail}/>


            </div>

            <div>
                <button onClick={submitForm}>submit</button>
            </div>


        </div>
      
    </div>
  )
}

export default Useref
