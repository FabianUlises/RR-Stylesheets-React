import React from 'react';
import './App.css';
import Child1 from './Child1';
import Child2 from './Child2';


function App() {
  return (
    <div className="App">
      <h1>Hello World</h1>
      <Child1 />

      <Child2 />
    </div>
  );
}

export default App;
