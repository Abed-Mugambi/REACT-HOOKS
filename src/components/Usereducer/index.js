import { type } from '@testing-library/user-event/dist/type';
import React, {useState, useReducer} from 'react'
import Modal from './Modal'

const reducer =(state,action)=>{
    // console.log(state);
    // console.log(action);
    // return state
    if(action.type === 'NEW_PERSON'){
        const newPeople= [...state.people,action.payload];

        return {...state, isModalOpen:true,
            people:newPeople,
            modalContent:'new person added'}
    }
    if(action.type === 'NO_VALUE'){
        return {...state,
            isModalOpen:true,
            modalContent:'empty input add a person'
        }
    }
    if(action.type === "CLOSE_MODAL"){
        return {...state, isModalOpen:false}

    }
    if(action.type === 'REMOVE_PERSON'){

        const filteredArray= state.people.filter((person)=>
        person.id !== action.payload)
        return {...state, people:filteredArray}
    }
    return state;
};

const defaultState={
    isModalOpen: true,
    people:[],
    modalContent:''
}

const Index = () => {

    const [name,setName]= useState('');
    const [state, dispatch]= useReducer(reducer,defaultState);

    // const [people, setPeople]= useState([]);
    // const [modal,SetModal]= useState(false);


    const addPerson=(e)=>{
        e.preventDefault();
        if(name){
            const newPerson = {name, id:Math.random()}

            dispatch({type:'NEW_PERSON',payload:newPerson})
            setName('')
            // console.log(newPerson);
        }
        else{
            dispatch({type: 'NO_VALUE'})
        }
        
    };
    const closeModal= ()=>{
        dispatch({type:'CLOSE_MODAL'});
    };

    

    return(
        <div className='maindiv'>
            <div>
                <h1>use reducer</h1>
                {state.isModalOpen && 
                <Modal closeModal={closeModal} myName={state.modalContent}
                 /> }

                <form onSubmit={addPerson}>
                    <input 
                    type="text"
                    name=""
                    onChange={(e)=> setName(e.target.value)}
                    value={name}
                    id=""></input>
                    <button>submit</button>
                </form>

                {
                    state.people.map((person)=>{
                        return(
                            <div key={person.id}>
                                <h4>{person.name}</h4>
                                <button onClick={()=>
                                dispatch({type:'REMOVE_PERSON',payload:person.id})}
                                >REMOVE</button>
                            </div>
                        )
                    })
                }
                
            </div>

        </div>
    )

//     const submitPerson= ()=>{

//         if(name){
//             const newPerson= {username:name, id:Math.random()};
//             setPeople([...people, newPerson]);
//             setName('');
//             setTimeout(()=>{
//                 SetModal(true);
//             }, 1000);
            
//         }
//     }

//   return (
//     <div className='maindiv'>
//         <h1>user reducer</h1>
//         {state.isModalOpen && <Modal/> }
//         <div>
//             <input value={name} onChange={(e)=> setName(e.target.value)} type="text" name="" placehoder="enter your mame"></input>
//             <button onClick={submitPerson}>submit</button>
//         </div>
//         {
//             people.map((person=>{
//                 return(
//                     <>
//                     <div key={person.id}>
//                         <h4>{person.username}</h4>
//                     </div>
//                     </>
//                 )
//             }))
//         }

//     </div>
//   )
 }

export default Index