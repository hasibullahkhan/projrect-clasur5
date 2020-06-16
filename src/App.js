import React, {useState} from 'react';
import Parent from './Parent'

import './App.css';

function App() {
  let [number, setNumber]=useState(45);
  return (
    <div>
<h1>hellow from main</h1>


< Parent num={number} />
<br/>
<button onClick ={ ()=>{setNumber(++number)} }>update Number</button>
    </div>
  );
}

export default App;
