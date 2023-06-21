import BackBtn from '../components/BackBtn';
import Nav from '../components/Nav';
import Search from '../components/Search';
import SearchInputList from '../components/SearchInputList';
import './SearchInput.css'

const SearchInput = () => {
    return ( 
        <>
        <BackBtn/>
        <Search/>
        <SearchInputList/>
        <Nav/>
        </>
     );
}
 
export default SearchInput;