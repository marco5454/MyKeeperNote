import React from "react";

function Note(props) {
  function deleteHandle() {
    props.onDelete(props.id);
  }

  return (
    <>
      <div className="note-wrapper">
        <h1>{props.title}</h1>
        <p>{props.content}</p>

        <div className="delete-wrapper">
          <button className="delete-btn" onClick={deleteHandle}>
            delete
          </button>
        </div>
      </div>
    </>
  );
}

export default Note;
