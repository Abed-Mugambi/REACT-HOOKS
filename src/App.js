import React from 'react';
import './App.css';
import Nav from './Nav';
import About from './About';
import Myshop from './Myshop';
import {BrowserRouter as Router,Route,Routes}  from 'react-router-dom';
import Propdrilling from './components/Propdrilling/Propdrilling';
import Usecontext from './components/Usecontext/Usecontext';

// import Usestatestring from './components/Usestate/Usestatestring';
// import Usestateobject from './components/Usestate/Usestateobject';
// import Usestateobjecttwo from './components/Usestate/Usestateobjecttwo';

// import Home from './components/Home.js';
// import {About} from './components/About.js'; 
// import Shop from './components/Shop.js';
// about is a custom 
import Usestatearray from './components/Usestate/Usestatearray';
// import Singleinput from './components/Forms/Singleinput';
// import Multipleinputs from './components/Forms/Multipleinputs';
import Useref from './components/Useref/Useref';
import Useeffect from './components/Useeffect/Useeffect';

import  Usereducer from './components/Usereducer'
// import Simplereturn from './components/conditionalrender/Simplereturn';


// function App() {
//   return (
//     <div className='App'>
//       {/* rendering */}

//       {/* <About></About> 
//       <Home></Home> */}

//       {/* <Shop></Shop> */}

//       {/* <Usestatestring></Usestatestring> */}
//       {/* <Usestateobject></Usestateobject> */}

//       {/* <Usestateobjecttwo></Usestateobjecttwo> */}

//       {/* <Usestatearray></Usestatearray> */}

//       {/* <Singleinput></Singleinput> */}

//       {/* <Multipleinputs></Multipleinputs> */}

//       {/* <Useref></Useref> */}

//       {/* <Useeffect></Useeffect> */}

//       {/* <Simplereturn></Simplereturn> */}

          // <Propdrilling/>

     
      

    
      

      
//     </div>
    
//   );
// }

// export default App;

function App(){

return(
<Router>
 
   <Nav/>
   <Routes>
   <Route path="/about" component={About}/>
   <Route path="/myshop" component={Myshop}/>
   <Route path="/propdrilling" element={ <Propdrilling/> }/>
   <Route path="/useeffect" element={ <Useeffect/> }/>
   <Route path="/useref" element={ <Useref/> }/>
   <Route path="/usestatearray" element={ <Usestatearray/> }/>
   <Route path="/usecontext" element={ <Usecontext/> }/>

   <Route path="/usereducer" element={ <Usereducer/> }/>





   </Routes>

  
  </Router>
)

}

export default App