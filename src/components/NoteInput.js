import PropTypes from "prop-types";
import React from "react";
import { BsCheckCircle } from "react-icons/bs";
import LanguageContext from "../context/LanguageContext";
const NoteInput = ({ addNote }) => {
  const [title, setTitle] = React.useState("");
  const [body, setBody] = React.useState("");
  const { language } = React.useContext(LanguageContext);

  const onTitleChangeEventHandler = (e) => {
    setTitle(e.target.value);
  };

  const onBodyChangeEventHandler = (e) => {
    setBody(e.target.value);
  };

  const onSubmitEventHandler = () => {
    addNote({ title, body });
  };

  return (
    <form className="note-input" onSubmit={onSubmitEventHandler}>
      <input
        maxLength={28}
        className="add-new-page__input__title"
        type="text"
        placeholder={language === "id" ? "Masukan Judul" : "Input Title"}
        value={title}
        onChange={onTitleChangeEventHandler}
        required
      />
      <textarea
        className="add-new-page__input__body"
        type="text"
        placeholder={language === "id" ? "Masukan Catatan" : "Input Note"}
        value={body}
        onChange={onBodyChangeEventHandler}
      />
      <div className="add-new-page__action">
        <button className="action" type="submit">
          <BsCheckCircle />
        </button>
      </div>
    </form>
  );
};
NoteInput.propTypes = {
  addNote: PropTypes.func,
};

export default NoteInput;
