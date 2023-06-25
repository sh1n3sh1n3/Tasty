import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Onboarding from "./pages/Onboarding";
import SearchInput from "./pages/SearchInput";
import SearchAreas from "./pages/SearchAreas";
import SearchCategory from "./pages/SearchCategory";
import Details from "./pages/Details";
import LoadingSection from "./components/LoadingSection";
import { useEffect, useState } from "react";
import {
  CategoryFilterContext,
  SearchbarCategoryContext,
  FilteredAreaContext,
  SearchTermAreaContext,
  SearchTermAllProductsContext,
  ThemeContext,
  ThemeDetailContext, NavContext
} from "./context/Context";

function App() {
  const [theme, setTheme] = useState(false);
  const [themeDetailPage, setThemeDetailPage] = useState(false);
  const [loading, setLoading] = useState();
  const [categoryFilter, setCategoryFilter] = useState("Beef");
  const [searchInputCategory, setSearchInputCategory] = useState("");
  const [filteredArea, setFilteredArea] = useState("American");
  const [searchInputArea, setSearchInputArea] = useState("");
  const [searchInputAllProducts, setsearchInputAllProducts] = useState("");
  const [nav, setNav] = useState("home");

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 4000);
  }, []);

  return (
    <section className={theme ? "dark" : "light"}>
      <NavContext.Provider value={{nav, setNav}}>
      <ThemeDetailContext.Provider
        value={{ themeDetailPage, setThemeDetailPage }}
      >
    <ThemeContext.Provider value={{ theme, setTheme }}>
          <FilteredAreaContext.Provider
            value={{ filteredArea, setFilteredArea }}
          >
              <SearchTermAreaContext.Provider
                value={{ searchInputArea, setSearchInputArea }}
              >
                <SearchTermAllProductsContext.Provider
                  value={{ searchInputAllProducts, setsearchInputAllProducts }}
                >
                  <SearchbarCategoryContext.Provider
                    value={{ searchInputCategory, setSearchInputCategory }}
                  >
                    <CategoryFilterContext.Provider
                      value={{ categoryFilter, setCategoryFilter }}
                    >
                      <BrowserRouter>
                        <Routes>
                          <Route
                            path="/"
                            element={
                              loading ? <LoadingSection /> : <Onboarding />
                            }
                          />
                          <Route path="/home" element={<Home />} />
                          <Route
                            path="/search/input"
                            element={<SearchInput />}
                          />
                          <Route
                            path="/search/areas"
                            element={<SearchAreas />}
                          />
                          <Route
                            path="/search/category"
                            element={<SearchCategory />}
                          />

                        <Route path="/detail/:id" element={<Details />} />
    </Routes>
    </BrowserRouter>
    </CategoryFilterContext.Provider>
    </SearchbarCategoryContext.Provider>
    </SearchTermAllProductsContext.Provider>
    </SearchTermAreaContext.Provider>
    </FilteredAreaContext.Provider>
    </ThemeContext.Provider>
      </ThemeDetailContext.Provider>
      </NavContext.Provider>
    </section>
  );
}

export default App;
