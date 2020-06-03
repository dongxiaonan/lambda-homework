import React from 'react';
import '../css/App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Home work
        </p>
        <a
          className="App-link"
          href="https://github.com/dongxiaonan/aws-training"
          target="_blank"
          rel="noopener noreferrer"
        >
          aws-training
        </a>

        <p>
          Server - container - backend/frontend
        </p>
        <a
          className="App-link"
          href="http://localhost:4000"
          target="_blank"
          rel="noopener noreferrer"
        >
          node server
        </a>
        <a
          className="App-link"
          href="http://localhost:4000/call"
          target="_blank"
          rel="noopener noreferrer"
        >
          call server-b
        </a>

        <p>
          Server-b - container - backend
        </p>
        <a
          className="App-link"
          href="http://localhost:5000"
          target="_blank"
          rel="noopener noreferrer"
        >
          node server with DB
        </a>
      </header>
    </div>
  );
}

export default App;
