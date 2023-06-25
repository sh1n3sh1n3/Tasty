import AreasBtnSection from "../components/AreasBtnSection";
import BackBtn from "../components/BackBtn";
import Nav from "../components/Nav";
import SearchAreasList from "../components/SearchAreasList";
import SearchbarArea from "../components/SearchbarArea";
import "./SearchAreas.css";
import { useContext, useEffect } from "react";
import { NavBtnColorContext } from "../context/Context";

const SearchAreas = () => {
  const { btnClicked, setBtnClicked } = useContext(NavBtnColorContext);

  useEffect(() => {
    setBtnClicked("search");
  }, []);
  return (
    <section className="search-areas-page">
      <BackBtn />
      <SearchbarArea />
      <AreasBtnSection />
      <SearchAreasList />
      <Nav />
    </section>
  );
};

export default SearchAreas;
