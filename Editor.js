import './App.css';

function Editor() {
    return (
        <div className="App">
            <header className="App-header">
                <p>Audio Editor</p>
                <audio>
                    <source src={window.file.name}></source>
                </audio>
            </header>
        </div>
    );
}

export default Editor;
