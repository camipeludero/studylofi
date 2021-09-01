import React from 'react'
import Pomodoro from './components/Pomodoro'
import Video from './components/Video'
import Todo from './components/Todo'
import './App.css'

function App() {
    return (
        <>
        <div id="overlay">    
        <h1>studio lofi</h1>
        </div> 
        <Video />
            <Pomodoro />
            <Todo />
        </>
    )
}

export default App
