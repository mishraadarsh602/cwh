import './TextForm.css';
import { useState } from "react";
export default function TextForm(props) {

  const handleUpClick = () => {
    let newText = text.toUpperCase();
    props.showAlert("Words changed to Uppercase successfully!!", "success");
    setText(newText);
  }


  const handleSnClick = () => {
    let newText = text.split(" ");
    for (let i = 0; i < newText.length; i++) {
      newText[i] = newText[i][0].toUpperCase() + newText[i].substr(1);
    }
    // props.showAlert("Words changed to Uppercase successfully!!","success");
    setText(newText.join(" "));
  }
  const handleCopyClick = () => {
    navigator.clipboard.writeText(text);
    //console.log(text);

    props.showAlert("Words Copied successfully!!", "success");
  }
  const handlePasteClick = () => {
    navigator.clipboard.readText().then((val) => {
      setText(val);
    });

    props.showAlert("Words Copied successfully!!", "success");
  }





  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra spaces removed  successfully!!", "success");
  }


  const handleLoClick = () => {
    // console.log(text)
    let newText = text.toLowerCase();
    props.showAlert("Words changed to Lowercase successfully!!", "success");

    setText(newText);
  }

  const handleOnChange = (event) => {
    
    setText(event.target.value);

  }

  const handleNumbersClick = () => {
    let newText = text.replace(/[^0-9]/g, "");
    setText(newText);
    props.showAlert("Words Cleared successfully!!", "success");
  }
  const handleAlphabetsClick = () => {
    let newText = text.replace(/[^a-z]/g, "");
    setText(newText);
    props.showAlert("Alphabets extarcted successfully!!", "success");
  }
  const handleReverseClick = () => {
    let newText = text.split(" ");
    newText.reverse();;
    setText(newText.join(" "));
    props.showAlert("Words reverse successfully!!", "success");
  }

  const handleClearClick = () => {
    setText("");
    props.showAlert("Words Cleared successfully!!", "success");
  }
  const handlePrefixClick = () => {
    let prefix = document.getElementById("prefix").value;
    let newText = text.split("\n");
    let res = [];
    for (let temp of newText) {
      res.push(`${prefix}${temp}`)
    }
    setText(res.join("\n"));
    props.showAlert("Words reverse successfully!!", "success");
  }

  const handleSuffixClick = () => {
    let prefix = document.getElementById("suffix").value;
    let newText = text.split("\n");
    let res = [];
    for (let temp of newText) {
      res.push(`${temp}${prefix}`)
    }
   // res.pop();
    setText(res.join("\n"));
    props.showAlert("Words reverse successfully!!", "success");

  }

  const handleRandomClick = () => {
    let index = Math.floor(Math.random() * (props.randoms).length);
    let newText = props.randoms[index];
    setText(newText);
  }
  const   handleReplaceAllClick  = () => {
    let word = document.getElementById("word").value;
    let replacewordwith = document.getElementById("replacewordwith").value;

   let newText=  text.replaceAll(word,replacewordwith);
  
   setText(newText);
  }

  const handleSoundClick = (custompitch) => {
    function getVoices() {
      let voices = speechSynthesis.getVoices();
      if (!voices.length) {
        // some time the voice will not be initialized so we can call spaek with empty string
        // this will initialize the voices 
        let utterance = new SpeechSynthesisUtterance("");
        speechSynthesis.speak(utterance);
        voices = speechSynthesis.getVoices();
      }
      return voices;
    }


    function speak(text, voice, rate, pitch, volume) {
      // create a SpeechSynthesisUtterance to configure the how text to be spoken 
      let speakData = new SpeechSynthesisUtterance();
      speakData.volume = volume; // From 0 to 1
      speakData.rate = rate; // From 0.1 to 10
      speakData.pitch = pitch; // From 0 to 2
      speakData.text = text;
      speakData.lang = 'en';
      speakData.voice = voice;

      // pass the SpeechSynthesisUtterance to speechSynthesis.speak to start speaking 
      speechSynthesis.speak(speakData);

    }

    if ('speechSynthesis' in window) {

      let voices = getVoices();
      let rate = 1, pitch = custompitch, volume = 1;
     //pitch by default;

      speak(text, voices[5], rate, pitch, volume);


    } else {
      console.log(' Speech Synthesis Not Supported 😞');
    }



  }




  let [text, setText] = useState("");

  return (
    <>
      <div className={`container mt-1 text-${props.mode === "light" ? "dark" : "light"}`}>
        <h3  >{props.title}</h3>
        <div>
          <button type="button" disabled={text.length === 0} className="btn btn-primary mt-2 me-2" onClick={handleUpClick} >UPPERCASE</button>
          <button type="button" disabled={text.length === 0} className="btn btn-primary mt-2 me-2" onClick={handleLoClick} >lowercase</button>
          <button type="button" disabled={text.length === 0} className="btn btn-primary mt-2 me-2" onClick={handleSnClick} >SentenceCase</button>
          <button type="button" disabled={text.length === 0} className="btn btn-primary mt-2 me-2" onClick={handleExtraSpaces} >Remove extra  Space</button>
          <button type="button" disabled={text.length === 0} className="btn btn-primary mt-2 me-2" onClick={handleCopyClick} >Copy to Clipboard </button>
          <button type="button"  className="btn btn-primary mt-2 me-2" onClick={handlePasteClick} >Paste from Clipboard</button>
          <button type="button" disabled={text.length === 0} className="btn btn-primary mt-2 me-2" onClick={handleNumbersClick} >Extract Numbers</button>
          <button type="button" disabled={text.length === 0} className="btn btn-primary mt-2 me-2" onClick={handleAlphabetsClick} >Extract Digit</button>
          <button type="button" disabled={text.length === 0} className="btn btn-primary mt-2 me-2" onClick={handleReverseClick} >Reverse</button>
          <button type="button" className="btn btn-primary mt-2 me-2" onClick={handleRandomClick} >Random</button>
          <button type="button" disabled={text.length === 0} className="btn btn-primary mt-2 me-2" onClick={()=>handleSoundClick(3)} >Convert Text to  Speech</button>
          {/* <button type="button" disabled={text.length === 0} className="btn btn-primary mt-2 me-2" onClick={()=>handleSoundClick(0)} >Convert Text to Female Speech</button> */}

          <button type="button" className="btn btn-danger mt-2 me-2" onClick={handleClearClick} >Clear</button>

        </div>
        <div className="mt-3">
          {/* <label htmlFor="floatingTextarea">Comments</label> */}

          <textarea className="form-control select-box"  cols="10" rows="8" placeholder="Enter the text here to start" onChange={handleOnChange} value={text} id="floatingTextarea"></textarea>
        </div>

        {/* <button type="button" disabled={text.length === 0} className="btn btn-primary mt-4 me-2" onClick={handlePrefixClick} >Reverse</button> */}
        <h5 className="mt-4">Prefix and Suffix</h5>
        <div className="row">
          <div className="col-12 col-md-6">
            <div className="input-group mb-3  ">
              <button disabled={text.length === 0} onClick={handlePrefixClick} className="btn btn-secondary " type="button">Add Prefix to each row</button>
              <input className="form-control" aria-label="Text input with segmented dropdown button" type="" id="prefix" palceholder="Prefix" />
            </div>
          </div>
          <div className="col-12 col-md-6">

            <div className="input-group mb-3">
              <button disabled={text.length === 0} onClick={handleSuffixClick} className="btn btn-secondary " type="button">Add Suffix to each row</button>
              <input className="form-control" type="text" id="suffix" palceholder="Suffix" />
            </div>
          </div>

          <div className="col-12 col-md-12">
          <h5 className="mt-4">Replace words</h5>

            <div className="input-group mb-3">
              <button disabled={text.length === 0} onClick={handleReplaceAllClick} className="btn btn-warning " type="button">Replace the word </button>
              <input className="form-control" type="text" id="word" placeholder="Word" />
              <input className="form-control" type="text" id="replacewordwith" placeholder="Replace word with" />

            </div>
          </div>

        </div>



      </div>
      <div className={`container mt-4 mb-5 text-${props.mode === "light" ? "dark" : "light"}`}>
        <h3 className="mt-3">Your Text Summary</h3>
        <p><span className="text-success">{text.split(/\s+/).filter((element) => { return element.length !== 0 }).length}</span> Words and <span className="text-success">{text.length}</span> characters</p>
        <span className="text-success">{0.008 * text.split(" ").filter((element) => { return element.length !== 0 }).length}</span> Minutes read
        <h3 className="mt-3">Preview</h3>
        <p></p>
        <textarea className="form-control select-box" disabled  cols="10" rows="3" value={text.length > 0 ? text : "Nothing to preview"} id="floatingTextarea"></textarea>

      </div>

    </>
  )
}
