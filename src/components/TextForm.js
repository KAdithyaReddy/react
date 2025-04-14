import React, { useState } from 'react';

export default function TextForm(props) {
  const [text, setText] = useState("");

  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to UPPERCASE!", "success");
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div className="container">
      <h2>{props.heading}</h2>
      <div className="mb-3">
        <textarea
          className="form-control"
          rows="8"
          value={text}
          onChange={handleOnChange}
          placeholder="Enter here..."
        ></textarea>
      </div>
      <button className="btn btn-primary" onClick={handleUpClick}>
        Convert to Uppercase
      </button>
    </div>
  );
}