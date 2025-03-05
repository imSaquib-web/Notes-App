import React, { useRef } from "react";

const Input = ({addList}) => {

  const inputText = useRef();

  const handleClick = () => {
    const value = inputText.current.value;
    console.log(value);
    addList(value)
    inputText.current.value = ""
  };
  const handleEnterPress = (e) => {
    if(e.key === "Enter"){
      e.preventDefault();
      handleClick();
    }
  }
  return (
    <div>
      <h1>Notes App</h1>
      <textarea
        name=""
        id="text-area"
        placeholder="Write your notes here..."
        ref={inputText}
        onKeyDown={handleEnterPress}
      ></textarea>
      <center>
      <button id="Button" onClick={handleClick}>
        Add Notes
      </button>
      </center>
    </div>
  );
};

export default Input;
