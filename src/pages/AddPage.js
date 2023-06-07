import React from "react";
import { addNote } from "../utils/network-data";
import NoteInput from "../components/NoteInput";
import { useNavigate } from "react-router-dom";

const AddPage = () => {
  const navigate = useNavigate();

  const onAddNoteHandler = async (Note) => {
    addNote(Note);
    navigate("/");
  };

  return (
    <section className="add-new-pageadd-new-page">
      <div className="add-new-page__input">
        <NoteInput addNote={onAddNoteHandler} />
      </div>
    </section>
  );
};

export default AddPage;
