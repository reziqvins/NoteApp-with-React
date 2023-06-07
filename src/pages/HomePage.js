import React, { useContext } from "react";
import NoteList from "../components/NoteList";
import { getActiveNotes } from "../utils/network-data";
import { useSearchParams, Link } from "react-router-dom";
import SearchBar from "../components/SearchBar";
import LanguageContext from "../context/LanguageContext";
import { VscAdd } from "react-icons/vsc";

const HomePage = () => {
  const { language } = useContext(LanguageContext);
  const [searchParams, setSearchParams] = useSearchParams();
  const [notes, setNotes] = React.useState([]);
  const [keyword, setKeyword] = React.useState(() => {
    return searchParams.get("keyword") || "";
  });

  const onKeywordChangeHandler = (keyword) => {
    setKeyword(keyword);
    setSearchParams({ keyword });
  };

  React.useEffect(() => {
    const fetchGetNotes = async () => {
      try {
        const { data } = await getActiveNotes();
        setNotes(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchGetNotes();
  }, []);

  const filteredNotes = notes.filter((note) => {
    return note.title.toLowerCase().includes(keyword.toLowerCase());
  });
  return (
    <section>
      <h2>{language === "id" ? "Catatan Aktif" : "Active Note"}</h2>
      <SearchBar keyword={keyword} setKeyword={onKeywordChangeHandler} />
      {filteredNotes.length !== 0 ? (
        <NoteList Notes={filteredNotes} />
      ) : (
        <p className="notes-list__empty"> Tidak ada Catatan</p>
      )}
      <div className="homepage__action">
      <Link to="/notes/new">
        <button className="action" type="button" title="Tambah">
          <VscAdd  />
        </button>
      </Link>
    </div>
    </section>
  );
};

export default HomePage;
