import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Onboarding from "./pages/Onboarding";
import SearchInput from "./pages/SearchInput";
import SearchAreas from "./pages/SearchAreas";
import SearchCategory from "./pages/SearchCategory";
import Details from "./pages/Details";
import { FilteredAreaContext, SearchTermAreaContext } from "./context/Context";
import { useState } from "react";

function App() {
  const [filteredArea, setFilteredArea] = useState([]);
  const [searchInputArea, setSearchInputArea] = useState("");
  return (
    <>
      <FilteredAreaContext.Provider value={{ filteredArea, setFilteredArea }}>
        <SearchTermAreaContext.Provider
          value={{ searchInputArea, setSearchInputArea }}
        >
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Onboarding />} />
              <Route path="/home" element={<Home />} />
              <Route path="/search/input" element={<SearchInput />} />
              <Route path="/search/areas" element={<SearchAreas />} />
              <Route path="/search/category" element={<SearchCategory />} />
              <Route path="/detail/:id" element={<Details />} />
            </Routes>
          </BrowserRouter>
        </SearchTermAreaContext.Provider>
      </FilteredAreaContext.Provider>
    </>
  );
}

export default App;
