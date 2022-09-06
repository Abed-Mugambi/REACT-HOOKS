import React, {  useState } from 'react'


const Multipleinputs=()=>{

    const [person,setPerson] = useState({username:'',useremail:'',userpassword:''})
    const [people,setPeople]= useState([])

    const getInputValue=(e)=>{
        const name= e.target.name;
        // const email= e.target.email;
        // const password= e.target.password;
        const value= e.target.value;

        setPerson({...person,
            [name]:value,
            // [email]:value,
            // [password]:value
        })

    }

    const addPerson = (e)=>{
        e.preventDefault();

        if(person.username && person.useremail){
            const newPerson= {...person,id:Math.random() }

            setPeople([...people,newPerson])

        }

        setPerson({username:'',userpassword:'',useremail:''})

        
        
    }
    console.log(person.username,person.useremail,person.userpassword);



  return (
    <div className='maindiv'>
        <div>
            <h1>Multiple inputs</h1>

            <form onSubmit={addPerson}>


                <div>
                    <input type="text" 
                    value={person.username}
                    name="username"
                    placeholder='Enter name'
                    id='username'
                    onChange={getInputValue}/>
                </div>

                <div>
                    <input type="email" 
                    value={person.useremail}
                    name="useremail"
                    placeholder='Enter email'
                    id='useremail'
                    onChange={getInputValue}/>
                </div>

                <div>
                    <input type="password" 
                    value={person.password}
                    name="userpassword"
                    placeholder='Enter password'
                    id='userpassword'
                    onChange={getInputValue}/>
                </div>

                <button>SUBMIT</button>


            </form>
            {

                people.map((person)=> {
                    return(
                        <div key={person.id}>
                            <h4>{person.username}</h4>
                            <h4>{person.useremail}</h4>

                            {/* <button onClick={()=> removePerson(person.id)}>remove</button> */}

                        </div>
                    
                    );
                })
            }
            
            {/* <button onClick={()=> setPeople([])}>clear people</button> */}
            
        </div>
      
    </div>
  )
}


export default Multipleinputs
