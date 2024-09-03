import { useState } from 'react'
import Home from './pages/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import About from './pages/About'


function App() {
  const [count, setCount] = useState(0)

  return (
   
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
        </Routes>

    </BrowserRouter>
  )
}

export default App
