import BackBtn from "../components/BackBtn";
import Nav from "../components/Nav";

import SearchInputList from "../components/SearchInputList";
import SearchbarSearchAll from "../components/SearchbarSearchAll";
import "./SearchInput.css";

const SearchInput = () => {
  return (
    <section className="search-input-page">
      <BackBtn />
      <SearchbarSearchAll />
      <SearchInputList />
      <Nav />
    </section>
  );
};

export default SearchInput;
