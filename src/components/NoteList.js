import React from "react";
import PropTypes from "prop-types";
import NoteItem from "./NoteItem";

const NoteList = ({ Notes, onDelete }) => {
  return (
    <div className="notes-list">
      {Notes.map((Note) => (
        <NoteItem key={Note.id} id={Note.id} onDelete={onDelete} {...Note} />
      ))}
    </div>
  );
};

NoteList.propTypes = {
  Notes: PropTypes.arrayOf(PropTypes.object).isRequired,
  onDelete: PropTypes.func,
};

export default NoteList;
