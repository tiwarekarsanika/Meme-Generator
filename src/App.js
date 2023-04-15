import './App.css';
import WebContent from './Components/memegen';
//declare import {useState} from "react" above or use React.useState in components below

function App() {
  return (
    <WebContent />
  )
}

export default App;

//mouse events
/* onClick onContextMenu onDoubleClick onDrag onDragEnd onDragEnter onDragExit
onDragLeave onDragOver onDragStart onDrop onMouseDown onMouseEnter onMouseLeave
onMouseMove onMouseOut onMouseOver onMouseUp */

/**
     * Note: if you ever need the old value of state to help you determine the new value of state,
     * you should pass a callback function to your state setter function instead of using state directly. 
     * This callback function will receive the old value of state as its parameter, which you can then use to determine your new value of state.
function add() {
  setCount(prevCount => prevCount + 1)
}*/

//sibling components in React donot have access to each other's data hence states should exist in parent components and shared with children components as props
// {props.setup && <h3>{props.setup}</h3>} new way to write If statement or checking two consitions at once
// {isShown && <p>{props.punchline}</p>} this is calle dconditional rendering (to display or not to display)
// <button onClick={toggleShown}>{isShown ? "Hide" : "Show"} Punchline</button> conditional rendering using ternary (display one of two things) operator