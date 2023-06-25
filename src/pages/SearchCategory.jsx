import BackBtn from "../components/BackBtn";
import CategoryBtnSection from "../components/CategoryBtnSection";
import Nav from "../components/Nav";
import SearchCategoryList from "../components/SearchCategoryList";
import SearchbarCategory from "../components/SearchbarCategory";
import "./SearchCategory.css";
import { useContext, useEffect } from "react";
import { NavContext } from "../context/Context";
const SearchCategory = () => {
  const { nav, setNav } = useContext(NavContext);
  useEffect(() => {
    setNav("search");
  }, []);
  return (
    <section className="search-category-page">
      <BackBtn />
      <SearchbarCategory />
      <CategoryBtnSection />
      <SearchCategoryList />
      <Nav />
    </section>
  );
};

export default SearchCategory;
