import PropTypes from "prop-types";
import React from "react";
import { MdOutlineDeleteOutline } from "react-icons/md";

const NoteDetail = ({ id, deleteNote }) => {
  const onDeleteHandler = () => {
    deleteNote(id);
  };

  return (
    <div className="detail-page__action">
      <button
        className="action"
        type="button"
        title="Hapus"
        onClick={onDeleteHandler}
      >
        <MdOutlineDeleteOutline />
      </button>
    </div>
  );
};

NoteDetail.propTypes = {
  id: PropTypes.string,
  deleteNote: PropTypes.func,
};

export default NoteDetail;
