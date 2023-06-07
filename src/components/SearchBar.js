import React from "react";
import PropTypes from "prop-types";
import LanguageContext from "../context/LanguageContext";

const SearchBar = ({ keyword, setKeyword }) => {
  const { language } = React.useContext(LanguageContext);
  return (
    <section className="search-bar">
      <input
        className="search-bar input"
        type="text"
        placeholder={
          language === "id" ? "Cari Berdasarkan Judul" : "Search By Tittle"
        }
        value={keyword}
        onChange={(event) => setKeyword(event.target.value)}
      />
    </section>
  );
};

SearchBar.propType = {
  keyword: PropTypes.string.isRequired,
  setKeyword: PropTypes.func.isRequired,
};

export default SearchBar;
