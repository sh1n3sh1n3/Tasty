import { Link } from "react-router-dom";
import AreasBtnSection from '../components/AreasBtnSection';
import Categories from '../components/Categories';
import Nav from '../components/Nav';
import RandomMeal from '../components/RandomMeal';
import Search from '../components/Search';
import './Home.css'
import { NavContext, FilteredAreaContext } from "../context/Context";
import { useContext, useEffect } from "react";

const Home = () => {
    const {nav, setNav} = useContext(NavContext);
    const { filteredArea, setFilteredArea } = useContext(FilteredAreaContext);

    useEffect(() => {
      setFilteredArea("American");
        setNav("home")
    },[])

    return ( 
        <section className='home-page'>
            <article className='home-wrapper'>
            <Search/>
            <RandomMeal/>
            <h3 className="area-title">Areas</h3>
            <Link to={`/search/areas`}><AreasBtnSection /></Link>
            <Categories/>
            </article>
            <Nav/>
        </section>
     );
}
 
export default Home;
