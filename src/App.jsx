import { useState } from 'react'
import Form from './component/Form'
import LoginForm from './component/LoginForm'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <LoginForm/>
    </>
  )
}

export default App
