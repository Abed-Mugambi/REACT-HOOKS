import React, { Component, useState } from 'react'




const Singleinput= ()=> {

    const [username,setUserName]= useState('')
    const [useremail,setUserEmail]= useState('')
    const [userpassword,setUserPassword]= useState('')

    const [people,setPeople]= useState([])

    const submitForm=()=>{

        if(username && useremail){

            const person= {username, useremail, id:Math.random()}
            setPeople((people)=>{
                return [...people, person];
            });

            setUserName('')
            setUserEmail('')
            setUserPassword('')
        }

    }



    // const submitForm =()=>{
    //     console.log(username);
    //     console.log(useremail);
    //     console.log(userpassword);
    //     setUserName('')
    //     setUserEmail('')
    //     setUserPassword('')

    // }

    return (
        <div className='maindiv'>
            <div>
            <h1>Single inputs</h1>

            <div>
            <input type="text" 
            name="" 
            placeholder="Enter your name"
            id=""
            value={username}
            onChange={(e)=> setUserName(e.target.value)}></input>
            </div>

            <div>
            <input type="text" 
            name="" 
            placeholder="Enter your email"
            id=""
            value={useremail}
            onChange={(e)=> setUserEmail(e.target.value)}></input>
            </div>

            <div>
            <input type="text" 
            name="" 
            placeholder="Enter your password"
            id=""
            value={userpassword}
            onChange={(e)=> setUserPassword(e.target.value)}></input>
            </div>

            <div>
                <button onClick={submitForm}>SUBMIT</button>
            </div>


            {
                people.map((person)=> {

                    return(
                        <div key={person.id}>
                            <h5>{person.username}</h5>
                            <h5>{person.useremail}</h5>


                        </div>
                    )
                })

            }
          
        </div>

            </div>
           

        
      )

}
  
export default Singleinput