import { useRef } from "react";
import Pomodoro from "./components/Pomodoro/Pomodoro";
import VideoPlayer from "./components/Player/VideoPlayer";
import Todo from "./components/TodoList/Todo";
import "./App.css";

function App() {
  const overlay = useRef(null);
  return (
    <>

      <div id="overlay" ref={overlay}>
        <h1>studylofi</h1>
        <Pomodoro />
        <Todo />
      </div>
      <VideoPlayer />
     
    </>
  );
}

export default App;
