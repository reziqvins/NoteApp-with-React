import React from "react";
import NoteDetail from "../components/NoteDetail";
import { showFormattedDate } from "../utils";
import { useNavigate, useParams } from "react-router-dom";
import { deleteNote, getNote } from "../utils/network-data";
import NotFoundPage from "./NotFoundPage";

const DetailPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [notes, setNotes] = React.useState([]);

  React.useEffect(() => {
    const fetchGetNotes = async () => {
      const { data } = await getNote(id);

      setNotes(data);
    };

    fetchGetNotes();
  }, [id]);

  const onDeleteHandler = async (id) => {
    await deleteNote(id);
    navigate("/");
  };
  return notes === null ? (
    <NotFoundPage />
  ) : (
    <section className="detail-page">
      <h3 className="detail-page__title">{notes.title}</h3>
      <p className="detail-page__createdAt">
        {showFormattedDate(notes.createdAt)}
      </p>
      <div className="detail-page__body">{notes.body}</div>
      <NoteDetail id={id} deleteNote={onDeleteHandler} />
    </section>
  );
};

export default DetailPage;
