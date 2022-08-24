import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
     <header className='App'> 
  <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/600px-Octicons-mark-github.svg.png' alt="logo" className='App-logo'/>
     <p>Deploy to GitHub pages</p>
     <p>
      <button type='button' onClick={() => setCount(())}></button>
     </p>
     </header>
    </div>
  )
}

export default App
