import BackBtn from "../components/BackBtn";
import CategoryBtnSection from "../components/CategoryBtnSection";
import Nav from "../components/Nav";
import SearchCategoryList from "../components/SearchCategoryList";
import SearchbarCategory from "../components/SearchbarCategory";
import "./SearchCategory.css";
import { useContext, useEffect } from "react";
import { NavBtnColorContext } from "../context/Context";
const SearchCategory = () => {
  const { btnClicked, setBtnClicked } = useContext(NavBtnColorContext);

  useEffect(() => {
    setBtnClicked("search");
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
