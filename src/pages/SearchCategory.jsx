import BackBtn from '../components/BackBtn';
import CategoryBtnSection from '../components/CategoryBtnSection';
import Nav from '../components/Nav';
import SearchCategoryList from '../components/SearchCategoryList';
import SearchbarCategory from '../components/SearchbarCategory';
import './SearchCategory.css'

const SearchCategory = () => {
    return ( 
        <section className='search-category-page'>
        <BackBtn/>
        <SearchbarCategory/>
        <CategoryBtnSection/>
        <SearchCategoryList/>
        <Nav/>
        </section>
     );
}
 
export default SearchCategory;