import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Count from './count'
import ShowCount from './showCount';


function App() {
  const [count, setCount] = useState(0) 

  return (
    <div className="App">
      <div className="card">
        <div className='flex'>
          <ShowCount counter={count} />
          <ShowCount counter={count} />
          <button onClick={() => setCount(count + 1)}>
      </button>
        </div>
      </div>
    </div>
  )
}



export default App
