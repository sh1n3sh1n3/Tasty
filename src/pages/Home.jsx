import { Link } from "react-router-dom";
import AreasBtnSection from '../components/AreasBtnSection';
import Categories from '../components/Categories';
import Nav from '../components/Nav';
import RandomMeal from '../components/RandomMeal';
import Search from '../components/Search';
import './Home.css'

const Home = () => {
    return ( 
        <section className='home-section'>
            <article className='home-wrapper'>
            <Search/>
            <RandomMeal/>
            <Link to={`/search/areas`}><AreasBtnSection /></Link>
            <Categories/>
            <Nav/>
            </article>
        </section>
     );
}
 
export default Home;