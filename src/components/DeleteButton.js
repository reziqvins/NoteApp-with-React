import React from "react";
import PropTypes from "prop-types";
import { RiDeleteBin6Line } from "react-icons/ri";

const DeleteButton = ({ id, onDelete }) => {
  const onDeleteHandler = () => {
    onDelete(id);
  };

  return (
    <div className="detail-page__action">
      <button
        className="action"
        type="button"
        title="Hapus"
        onClick={onDeleteHandler}
      >
        <RiDeleteBin6Line />
      </button>
    </div>
  );
};
DeleteButton.propTypes = {
  id: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default DeleteButton;
