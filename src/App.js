import React from 'react';
import './App.css';

function App() {
  const [state, setState] = React.useState(0)
  return (
    <div className="App">
      <button type="button" onClick={}>Increment</button>
      <button>decrement</button>
    </div>
  );
}

export default App;
