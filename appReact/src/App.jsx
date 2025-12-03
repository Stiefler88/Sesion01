import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function Greeting(){
  return (<h2>Hello, welcome! Let's get starded!</h2>);
}
 function Header(){
  return (
  <header><h1>Introduction a React</h1>
  
  <img src="logo.jpg"  width="300" height="200" alt="React Logo" />
  <h2>A la decouverte des premieres notions de React</h2>
  
  </header>

);
}
function MainContent(){
  return ( <h3> Ici, nous afficherons des informations interessantes</h3>
    );}

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Greeting />
      <Header />
      <MainContent />
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
