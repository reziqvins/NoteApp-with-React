import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const NoteItemBody = ({ id, title, body, createdAt }) => {
  return (
    <div className="note-item__content">
      <div className="cardHeader">
        <h3 className="note-item__title">
          <Link to={`/notes/${id}`}>{title}</Link>
        </h3>
        <p className="note-item__createdAt ">{createdAt}</p>
      </div>
      <p className="note-item__body">{body}</p>
    </div>
  );
};
NoteItemBody.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
};

export default NoteItemBody;
