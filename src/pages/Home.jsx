import { Link } from "react-router-dom";
import AreasBtnSection from '../components/AreasBtnSection';
import Categories from '../components/Categories';
import Nav from '../components/Nav';
import RandomMeal from '../components/RandomMeal';
import Search from '../components/Search';
import './Home.css'

const Home = () => {
    return ( 
        <section className='home-page'>
            <article className='home-wrapper'>
            <Search/>
            <RandomMeal/>
            <Link to={`/search/areas`}><AreasBtnSection /></Link>
            <Categories/>
            </article>
            <Nav/>
        </section>
     );
}
 
export default Home;