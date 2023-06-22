import AreasBtnSection from "../components/AreasBtnSection";
import BackBtn from "../components/BackBtn";
import Nav from "../components/Nav";
import SearchAreasList from "../components/SearchAreasList";
import SearchbarArea from "../components/SearchbarArea";
import "./SearchAreas.css";

const SearchAreas = () => {
  return (
    <>
      <BackBtn />
      <SearchbarArea />
      <AreasBtnSection />
      <SearchAreasList />
      <Nav />
    </>
  );
};

export default SearchAreas;
