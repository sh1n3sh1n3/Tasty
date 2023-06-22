import './Search.css'
import SearchIcon from '../images/SearchIcon.png'
import { SearchbarCategoryContext } from '../context/Context';
import { useContext } from 'react';

const SearchbarCategory = () => {
    const { searchInputCategory, setSearchInputCategory } = useContext(SearchbarCategoryContext)

    return ( 
        <div className='searchbar-category'>
        <img src={SearchIcon} alt="lupe" />
        <input onChange={(e) => setSearchInputCategory(e.target.value)} type="text" placeholder='search' />
        </div>
     );
}

export default SearchbarCategory;