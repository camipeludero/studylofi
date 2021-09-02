import React from 'react';
import Pomodoro from './components/Pomodoro';
import Video from './components/Video';
import Todo from './components/Todo';
import './App.css';
import { gsap } from "gsap";
import { Draggable } from "gsap/Draggable";


gsap.registerPlugin(Draggable);

function App() {
    Draggable.create(".window", 
   {bounds:"#overlay"});

    return (
        <>
        <div id="overlay">    
        <h1>studio lofi</h1>
        <Pomodoro />
            <Todo />
        </div> 
        <Video />
        </>
    )
}

export default App
