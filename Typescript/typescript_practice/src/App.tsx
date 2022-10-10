import React from 'react';
import './App.css';
import TestComponent from './TestComponent';

// React の Function Component に型付けする
const App: React.FC = () => {
  return (
    <div className="App">
      <header className='App-header'>
        <TestComponent text={'hello'} />
      </header>
    </div>
  );
}

export default App;
