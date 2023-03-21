import { useState, useMemo, useEffect } from 'react';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SimonButton from './simonButton';


const SHOW_TIME = 1000
const PAUSE_TIME = 500

const classColor = ["green", "red", "blue", "yellow"]

function getRandomColor() {
  return classColor[Math.floor(Math.random() * classColor.length)]
}


function App() {

  const [simonSequel, setSimonSequel] = useState(new Array<string>)
  const [index, setIndex] = useState(0)
  const [light, setLight] = useState(false)

  const [playerSequel, setPlayerSequel] = useState(new Array<string>)
  const [playerTurn, setTurn] = useState(true)

  const currentColor = useMemo(() => {
    return simonSequel[index]
  }, [simonSequel, index])

  useEffect(() => {
    if (!playerTurn) {
      nextColor()
    }
  }, [currentColor, index, playerTurn])

  const AllButton = classColor.map((element, id) =>
    <SimonButton key={id} color={element} index={index} currentColor={currentColor} active={element === currentColor && light} turn={playerTurn} onClick={addplayer}></SimonButton>
  );

  function nextColor() {
    if (!playerTurn) {
      setTimeout(() => {
        setLight(true)
        console.log(simonSequel)
        setTimeout(() => {
          setLight(false)
          if (index + 1 >= simonSequel.length) {
            setTurn(true)
            setIndex(0)
          } else {
            setIndex(index + 1)
          }
        }, SHOW_TIME)
      }, PAUSE_TIME)
    }
  }

  function addplayer(color: string) {
    console.log(simonSequel[index])
    if(!light && playerTurn){
      setLight(true)
      if (color == simonSequel[index]) {
        setPlayerSequel([...playerSequel, color])
        if (index + 1 >= simonSequel.length) {
          setSimonSequel([...simonSequel, getRandomColor()])
          setTimeout(()=>{
            setTurn(false)
            setIndex(0)
          },PAUSE_TIME)
        } else {
          setTimeout(()=>{
            setLight(false)
            setIndex(index + 1)
          },PAUSE_TIME)
        }
      } else {
        setLight(false)
        window.alert("Game is over !  You scored " + (simonSequel.length))
        reset()
      }
    }
  }

  return (
    <div className="App">
      <h1>Simon</h1>
      <h2>Level : {simonSequel.length}</h2>
      <div className='divSimon'>
        {AllButton}
      </div>
      <button onClick={() => {
        if (simonSequel.length == 0) {
          setSimonSequel([getRandomColor()])
          setTurn(false)
          setIndex(0)
        }
      }}>
        Start
      </button>
      <button onClick={() => {
        reset()
      }}>
        Reset
      </button>
      
    </div>
  )

  function reset(){
    setSimonSequel(new Array<string>)
    setPlayerSequel(new Array<string>)
    setLight(false)
    setIndex(0)
    setTurn(true)
  }
}



export default App
