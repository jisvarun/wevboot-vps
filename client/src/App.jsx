import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [message, setMessage] = useState(0)

  useEffect(() => {
    fetch("http://72.61.174.210:4000/api/message")
    .then((res) => res.json())
    .then((data) => setMessage(data.message))
    .catch((err) => {
      console.error("Error fetching message", err);
      
    })
  }, [])

  return (
    <>
      <h1>Welcome to Wevboot frontend </h1>
      <h2>Data: {message}</h2>
    </>
  )
}

export default App
