import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './pages/Home'
import Onboarding from './pages/Onboarding'
import SearchInput from './pages/SearchInput'
import SearchAreas from './pages/SearchAreas'
import SearchCategory from './pages/SearchCategory'
import Details from './pages/Details'
import React, { useState } from "react";
import { ThemeContext } from './context/Context'

function App() {
  const [theme, setTheme] = useState(false);

  return (
    <section className={theme ? "dark" : ""}>
       <ThemeContext.Provider value={{ theme, setTheme }}>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Onboarding/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/search/input' element={<SearchInput/>}/>
      <Route path='/search/areas' element={<SearchAreas/>}/>
      <Route path='/search/category' element={<SearchCategory/>}/>
      <Route path='/detail/:id' element={<Details/>}/>
    </Routes>
    </BrowserRouter>
    </ThemeContext.Provider>
    </section>
  )
}

export default App
