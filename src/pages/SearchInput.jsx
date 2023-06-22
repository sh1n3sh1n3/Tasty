import BackBtn from "../components/BackBtn";
import Nav from "../components/Nav";

import SearchInputList from "../components/SearchInputList";
import SearchbarSearchAll from "../components/SearchbarSearchAll";
import "./SearchInput.css";

const SearchInput = () => {
  return (
    <>
      <BackBtn />
      <SearchbarSearchAll />
      <SearchInputList />
      <Nav />
    </>
  );
};

export default SearchInput;
