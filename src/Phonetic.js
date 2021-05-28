import React from "react";

import "./Phonetic.css";

export default function Phonetic(props) {
  const audio = new Audio(props.phonetic.audio);

  function handleClick() {
    audio.play();
  }

  return (
    <div className="Phonetic">
      <button type="button" className="phoneticButton" onClick={handleClick}>
        <i className="fas fa-volume-up"></i>
      </button>

      {props.phonetic.text}
    </div>
  );
}
