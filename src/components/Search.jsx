import "./Search.css";
import { Link } from "react-router-dom";
const Search = () => {
  return (
    <>
      <section className="search-homepage-container">
        <Link to={`/search/input`}>
          <input type="text" placeholder="Search" />
        </Link>
      </section>
    </>
  );
};

export default Search;
