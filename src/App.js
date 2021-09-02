import React, { useRef, useEffect } from 'react';
import Pomodoro from './components/Pomodoro';
import Video from './components/Video';
import Todo from './components/Todo';
import './App.css';

function App() {
    const overlay = useRef(null);
    return (
        <>
        <div id="overlay" ref={overlay}>    
        <h1>studio lofi</h1>
        
        <Pomodoro />
            <Todo />
        </div> 
        <Video />
        </>
    )
}

export default App
