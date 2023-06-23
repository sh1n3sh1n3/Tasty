import "./Search.css";
import { Link } from "react-router-dom";
import Search2 from '../images/nav-icon/Search.svg';
const Search = () => {
  return (
    <>
      <section className="search-homepage-container">
        
        <Link to={`/search/input`}>
          <div className="searchbar-wrapper">
          <img src={Search2} alt="search-icon" />
          <input type="text" placeholder="Search"  className="searchbar-input"/>
          </div>
        </Link>
       
      </section>
    </>
  );
};

export default Search;
