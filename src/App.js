import React from 'react';
//import logo from './logo.svg';
//import './App.css';

function App() {
  return (
    
    <div className="ui container comments">
      <div className="comment">
        <a href="/" className="avatar">
          <img alt="avatar" />
        </a>
        <div className="content">
          <a href="/" className="author">
            Sam
          </a>
          <div className="metadata">
            <span className="date">Today at 6:00Pm</span>
          </div>
          <div className="text">Nice Blog post!</div>
        </div>
      </div>
    </div>
  );
}

export default App;
