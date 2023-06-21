import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './pages/Home'
import Onboarding from './pages/Onboarding'
import SearchInput from './pages/SearchInput'
import SearchAreas from './pages/SearchAreas'
import SearchCategory from './pages/SearchCategory'
import Details from './pages/Details'
import { useEffect, useState } from 'react'
import LoadingSection from './components/LoadingSection'

function App() {
  const [loading, setLoading] = useState()

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false)
    }, 4000)
  }, [])

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={loading ? <LoadingSection /> : <Onboarding/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/search/input' element={<SearchInput/>}/>
      <Route path='/search/areas' element={<SearchAreas/>}/>
      <Route path='/search/category' element={<SearchCategory/>}/>
      <Route path='/detail/:id' element={<Details/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
