import React from 'react'

import Child from './Child';
const Parent = (probs) => {
    return ( <div>
        
        <h1>Helo from parrent:{probs.num}</h1>
         <Child num={probs.num} />  </div>   ) 
       
} 
export default Parent;

