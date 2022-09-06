import React, {useState, useContext} from 'react'
import {products} from '../data'

const ItemsContext = React.createContext();

// console.log(ItemContext);

const Usecontext=()=>{
    const [items, setItems]= useState(products)


    const removeItem=(id)=>{
        setItems((prevState)=>{
            let newItems= prevState.filter((item)=>item.id !== id)
            return newItems
        });
    }

    
  return (
    <ItemsContext.Provider value={{items,removeItem}}>
    <div className='maindiv'>
        <div>
        <h1>Usecontext</h1>
        <AllItems/>
        <SingleItem/>
        </div>
    </div>
    </ItemsContext.Provider>
  );
};

const AllItems=()=>{

    const itemsData= useContext(ItemsContext);
    return <div>
        {
            itemsData.items.map((item)=>{
                return <SingleItem key={item.id} {...item}/>
            })
        }

        </div>
    
}

const SingleItem=({img,name,id})=>{

    const removeItem= useContext(ItemsContext).removeItem;

    return<div>
       <img src={img} height='100px' alt=''/>
       <h4>{name}</h4>

       <button onClick={()=> removeItem(id)}>Remove item</button>
            
        </div>
    
}

export default Usecontext