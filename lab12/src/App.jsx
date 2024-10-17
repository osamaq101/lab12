import { useState } from 'react'
import StudentRegistration from './components/Registration.jsx'
//import './App.css'
import './Registration.css'

function App() {
  const [count, setCount] = useState(0)

  return (
      <div className="App">
          <StudentRegistration />
      </div>
  )
}

export default App
