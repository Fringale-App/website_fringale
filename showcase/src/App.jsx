import { useState } from 'react'
import Home from './pages/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import About from './pages/About'
import Contact from './pages/Contact'
import Reviews from './pages/Reviews'


function App() {
  const [count, setCount] = useState(0)

  return (
   
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/reviews' element={<Reviews/>}/>
        </Routes>

    </BrowserRouter>
  )
}

export default App
