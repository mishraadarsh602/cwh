import './TextForm.css';
import { useState } from "react";

export default function TextForm(props) {

  const handleUpClick = () => {
    // console.log(text)
    let newText = text.toUpperCase();
    props.showAlert("Words changed to Uppercase successfully!!","success");

    setText(newText);

  }


  const handleLoClick = () => {
    // console.log(text)
    let newText = text.toLowerCase();
    props.showAlert("Words changed to Lowercase successfully!!","success");

    setText(newText);
  }

  const handleOnChange = (event) => {
    // console.log("Onchange clicked")
    console.log(event.target.value);
    setText(event.target.value);

  }


  const handleClearClick = () => {
    // console.log("Onchange clicked")
    setText("");
    props.showAlert("Words Cleared successfully!!","success");


  }




  let [text, setText] = useState("");

  return (
    <>
      <div className={`container text-${props.mode === "light" ? "dark" : "light"}`}>
        <h1 >{props.title}</h1>
        <div className="">
          <label htmlFor="floatingTextarea">Comments</label>

          <textarea className="form-control select-box" style={{ backgroundColor: props.mode === "dark" ? "grey" : "#fff", color: props.mode === "dark" ? "#fff" : "dark" }} cols="10" rows="8" onChange={handleOnChange} value={text} id="floatingTextarea"></textarea>
        </div>
        <button type="button" className="btn btn-primary mt-4 me-4" onClick={handleUpClick} >Change text to UpperCase</button>
        <button type="button" className="btn btn-primary mt-4" onClick={handleLoClick} >Change text to UpperCase</button>
        <button type="button" className="btn btn-primary mt-4" onClick={handleClearClick} >Clear Text</button>



      </div>
      <div className={`container mt-4 text-${props.mode === "light" ? "dark" : "light"}`}>
        <h2 className="mt-3">Your Text Summary</h2>
        <p>{text.split(" ").length} Words and {text.length} characters</p>
        <p>  {text.split(" ").length / 200} minutes</p>
        <h2 className="mt-3">Preview</h2>
        <p>{text.length>0?text:"Enter the text in above textbox to preview here"}</p>
      </div>

    </>
  )
}
