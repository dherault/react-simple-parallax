import './App.css';

import { useRef} from 'react'

function App() {
  const rootRef = useRef()

  return (
    <div ref={rootRef} className="root">
      <div className="square" />
      <div className="square" />
      <div className="square" />
      <div className="square" />
      <div className="square" />
      <div className="square" />
    </div>
  );
}

export default App;
