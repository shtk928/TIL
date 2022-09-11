import React, { useState } from 'react';
import './App.css';

import Button from './Button';

function App() {

  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <div className='Box'>
        <p>カウント： {count}</p>
        <Button btn_click={() => { setCount((prevCount) => prevCount + 1) }} btn_txt='プラスする' />
        <Button btn_click={() => { setCount((prevCount) => prevCount - 1) }} btn_txt='マイナスする'/>
      </div>
    </div>
  );

}

export default App;