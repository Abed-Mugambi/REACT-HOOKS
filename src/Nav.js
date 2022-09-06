import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <nav>
        <h3>logo</h3>
        
        <ul className='nav-links'>
            <li>about</li>
            <li>shop</li>
            <Link to="/propdrilling">
            <li>Propdrilling</li>
            </Link>

          <Link to="/useeffect"> 
            <li>Useeffect</li>
            </Link>

{/*             
          <Link to="/useref"> 
            <li>Useref</li>
            </Link>

               
          <Link to="/usestatearray"> 
            <li>Usestatearray</li>
            </Link> */}

                
          <Link to="/usecontext" className='links'> 
            <li>Usecontext</li>
            </Link>

                 
          <Link to="/usereducer" className='links'> 
            <li>Usereducer</li>
            </Link>

        </ul>
    </nav>
  )
}

export default Nav
