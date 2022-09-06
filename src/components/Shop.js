import React from 'react'

import {products} from './data'



   
   



//props
    const Shop = () => {
        return(
            <section>
                {
                    products.map((product)=>{
                        const {id,name,img}= product
                        return <Product key={id} {...product}/>
                        // return <Product key={product.id} item={product}/>
                    })

                }
                
              </section>
        )
    
    }

    const Product=({name,img})=>{
        // console.log(props.item);
        // const{name,img}= props.item

        return(
            <div>
                <img src={img} height="100px" alt="" />
                <h4>{name}</h4>
            </div>
        )



    }


export default Shop
