import React, { useState } from 'react';

export default function TextForm(props) {
  const [text, setText] = useState("");

  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to UPPERCASE!", "success");
  };

  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to LOWERCASE!", "success");
  };

  const handleClearClick = () => {
    setText("");
    props.showAlert("Text Cleared!", "success");
  };

  const handleCopyClick = () => {
    navigator.clipboard.writeText(text);
    props.showAlert("Text Copied!", "success");
  };

  const handleRemoveSpaces = () => {
    let newText = text.replace(/\s+/g, ' ').trim();
    setText(newText);
    props.showAlert("Extra spaces removed!", "success");
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div className="container text-light">
      <h2 className="mb-4">Enter the text to analyze below</h2>
      <div className="mb-3">
        <textarea
          className="form-control"
          style={{ backgroundColor: '#0b2545', color: 'white', border: '2px solid #007bff' }}
          rows="8"
          value={text}
          onChange={handleOnChange}
        ></textarea>
      </div>
      <div className="mb-3 d-flex flex-wrap gap-2">
        <button className="btn btn-primary" onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-primary" onClick={handleLoClick}>Convert to Lowercase</button>
        <button className="btn btn-primary" onClick={handleClearClick}>Clear Text</button>
        <button className="btn btn-primary" onClick={handleCopyClick}>Copy Text</button>
        <button className="btn btn-primary" onClick={handleRemoveSpaces}>Remove Extra Spaces</button>
      </div>
      <div className="mt-4">
        <h3>Your text summary</h3>
        <p>{text.split(/\s+/).filter((e) => e.length !== 0).length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").filter((e) => e.length !== 0).length} Minutes read</p>
        <h3>Preview</h3>
        <p>{text.length > 0 ? text : "Nothing to preview!"}</p>
      </div>
    </div>
  );
}
