import React from "react";
import { useState } from "react";

export default function Formtext(props) {
  const convertUCClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };
  const convertLCClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };
  const clearclick=()=>{
    setText("")
  }

  const copyclick = ()=>{
    let text =  document.getElementById("exampleFormControlTextarea1");
    text.select();
    navigator.clipboard.writeText(text.value)
  }

  const onchange = (event) => {
    setText(event.target.value);
  };


  const [text, setText] = useState("");

  return (
    <div className={`container w-50 text-${props.mode === "light"?"dark":"light"}`}>
      <p className={`h3 my-3 `}>{props.heading}</p> 
      <div className="mb-3">
        <textarea
          className="form-control"
          onChange={onchange}
          value={text}  
          id="exampleFormControlTextarea1"
          rows="7"
          style={{backgroundColor:props.mode === "dark"?"#13466e":"white",color:props.mode === "dark"?"white":"black"}}
        ></textarea>
      </div>

      <button disabled={text.length===0} onClick={convertUCClick}  className="btn btn-primary my-1">
        convert to UpperCase
      </button>
      <button disabled={text.length===0} onClick={convertLCClick} className="btn btn-primary my-1 ms-3">convert to LowerCase</button>
      <button disabled={text.length===0} onClick={clearclick} className="btn btn-primary my-1 ms-3">Clear</button>
      <button disabled={text.length===0} onClick={copyclick} className="btn btn-primary my-1 ms-3">Copy</button>

      <p className="mt-3">{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
      <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} min to read this text</p>
        <p className="h4 my3">Preview</p>
        <p>{text !== "" ? text : "Enter your text to preview here" }</p>
    </div>
  );
}
