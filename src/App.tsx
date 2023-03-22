import { useState, useMemo, useEffect } from 'react';
import './App.css'

function App() {

  
  useEffect(()=>{
    fetch("https://api-adresse.data.gouv.fr/search/?q=8+bd+du+port")
  }) 

  return (
    <div className="App">
      <h1>API</h1>

    </div>
  )
}



export default App
