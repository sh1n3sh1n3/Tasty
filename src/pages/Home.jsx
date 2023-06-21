import AreasBtnSection from '../components/AreasBtnSection';
import Categories from '../components/Categories';
import Nav from '../components/Nav';
import RandomMeal from '../components/RandomMeal';
import Search from '../components/Search';
import './Home.css'

const Home = () => {
    return ( 
        <>
        <h1>Home</h1>
        <Search/>
        <RandomMeal/>
        <AreasBtnSection/>
        <Categories/>
        <Nav/>
        </>
     );
}
 
export default Home;