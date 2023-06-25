import { Link } from "react-router-dom";
import AreasBtnSection from "../components/AreasBtnSection";
import Categories from "../components/Categories";
import Nav from "../components/Nav";
import RandomMeal from "../components/RandomMeal";
import Search from "../components/Search";
import "./Home.css";
import { FilteredAreaContext } from "../context/Context";
import { useContext, useEffect } from "react";
import { NavBtnColorContext } from "../context/Context";
const Home = () => {
  const { filteredArea, setFilteredArea } = useContext(FilteredAreaContext);
  const { btnClicked, setBtnClicked } = useContext(NavBtnColorContext);

  useEffect(() => {
    setFilteredArea("American");
    setBtnClicked("home");
  }, []);
  return (
    <section className="home-page">
      <article className="home-wrapper">
        <Search />
        <RandomMeal />
        <h3 className="area-title">Areas</h3>
        <Link to={`/search/areas`}>
          <AreasBtnSection />
        </Link>
        <Categories />
      </article>
      <Nav />
    </section>
  );
};

export default Home;
