import React from 'react'
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Home from './Pages/Home'
import "./App.css"
import Navpc from './Component/Navpc'
import Sec1 from './Component/Sec1'
import Navmobile from './Component/Navmobile'
import Contact from './Pages/Contact'
import Advance from './Pages/Advance'

const App = () => {
  return (
    <Router>
        <Routes>
            <Route path='/' element={<Home/>}/>

            <Route path='/Navpc' element={<Navpc/>}/>
            <Route path='/sec1' element={<Sec1/>}/>
            <Route path='/Navmobile' element={<Navmobile/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/advance' element={<Advance/>}/>
        </Routes>
    </Router>
  )
}

export default App