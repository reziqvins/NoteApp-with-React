import React from "react";
import PropType from "prop-types";
import NoteItemBody from "./NoteItemBody";
import { showFormattedDate } from "../utils/index";

const NoteItem = ({ id, title, body, createdAt }) => {
  return (
    <div className="note-item">
      <NoteItemBody
        id={id}
        title={title}
        body={body}
        createdAt={showFormattedDate(createdAt)}
      />
    </div>
  );
};
NoteItem.propType = {
  title: PropType.string.isRequired,
  body: PropType.string.isRequired,
  id: PropType.string.isRequired,
  createdAt: PropType.string.isRequired,
};

export default NoteItem;
