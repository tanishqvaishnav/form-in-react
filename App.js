import { useRef, useState } from 'react';
import { useHistory } from 'react-router';
import './App.css';

function App() {
  const history = useHistory();
  const inputFile = useRef(null);
  const [filename, setFilename] = useState("");
  return (
    <div className="App">
      <header className="App-header">
        <input type='file' id='file' ref={inputFile} onChange={(event) => { setFilename(event.target.files[0]) }} />
        <br />
        <button onClick={() => { window.file = filename; history.push('/editor'); }}>Upload Audio</button>
      </header>
    </div>
  );
}

export default App;
