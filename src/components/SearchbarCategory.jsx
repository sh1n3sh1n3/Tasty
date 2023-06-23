import './Search.css'
import Search2 from '../images/nav-icon/Search.svg';
import { SearchbarCategoryContext } from '../context/Context';
import { useContext } from 'react';

const SearchbarCategory = () => {
    const { searchInputCategory, setSearchInputCategory } = useContext(SearchbarCategoryContext)

    return (
        <section className='search-homepage-container'>
        <div className='searchbar-wrapper'>
        <img src={Search2} alt="lupe" />
        <input onChange={(e) => setSearchInputCategory(e.target.value)} type="text" placeholder='Search'  className='searchbar-input'/>
        </div>
        </section> 
     );
}

export default SearchbarCategory;