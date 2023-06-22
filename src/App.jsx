import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './pages/Home'
import Onboarding from './pages/Onboarding'
import SearchInput from './pages/SearchInput'
import SearchAreas from './pages/SearchAreas'
import SearchCategory from './pages/SearchCategory'
import Details from './pages/Details'
import LoadingSection from './components/LoadingSection'
import { useEffect, useState } from 'react'
import { CategoryFilterContext, SearchbarCategoryContext } from './context/Context'

function App() {
  const [loading, setLoading] = useState()
  const [categoryFilter, setCategoryFilter] = useState("Beef")
  const [searchInputCategory, setSearchInputCategory] = useState("")

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false)
    }, 4000)
  }, [])

  return (
    <>
    <SearchbarCategoryContext.Provider value={{ searchInputCategory, setSearchInputCategory }}>
    <CategoryFilterContext.Provider value={{ categoryFilter, setCategoryFilter }}>
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
    </CategoryFilterContext.Provider>
    </SearchbarCategoryContext.Provider>
    </>
  )
}

export default App
