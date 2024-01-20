import React, { useState } from "react";

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
      };
    });
  }
  function handleSave(e) {
    props.onSave(note);
    setNote({
      title: "",
      content: "",
    });
    e.preventDefault();
  }
  return (
    <>
      <div className="createArea-wrapper">
        <input
          type="text"
          name="title"
          placeholder="title"
          value={note.title}
          onChange={handleChange}
        />
        <textarea
          typeof="text"
          name="content"
          placeholder="enter info here..."
          value={note.content}
          onChange={handleChange}
        />
        <button className="btn-save" onClick={handleSave}>
          Save
        </button>
      </div>
    </>
  );
}

export default CreateArea;
