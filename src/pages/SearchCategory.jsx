import BackBtn from '../components/BackBtn';
import CategoryBtnSection from '../components/CategoryBtnSection';
import Nav from '../components/Nav';
import Search from '../components/Search';
import SearchCategoryList from '../components/SearchCategoryList';
import SearchbarCategory from '../components/SearchbarCategory';
import './SearchCategory.css'

const SearchCategory = () => {
    return ( 
        <>
        <BackBtn/>
        <SearchbarCategory/>
        <CategoryBtnSection/>
        <SearchCategoryList/>
        <Nav/>
        </>
     );
}
 
export default SearchCategory;