import React, {useState} from 'react'

export default function Textform(props) {

    const [text, setText] = useState('');
    const handleUpClick = () => {
        console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handleLowClick = () => {
        // console.log("Uppercase was clicked" + text);
        let newText = text.toLowerCase();
        setText(newText);
    }

    const handleOnChange = (event) => {
        // console.log("On Change");
        setText(event.target.value);
    }

    const clearText = () => {
        // console.log("Uppercase was clicked" + text);
        let newText = "";
        setText(newText);
    }
    const copyClipboard = () => {
        navigator.clipboard.writeText(text)
            .then(() => {
                console.log("Text copied to clipboard!");
            })
            .catch((err) => {
                console.error("Failed to copy text: ", err);
            });
    };
    
    const removeSpaces = () => {
        // console.log("Uppercase was clicked" + text);
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
    }

  return (
    <>
    <div className = "container">
        <h1>{props.heading}</h1>
        <form>
        <div className="form-group">
            <textarea className="form-control" placeholder="Enter text here..." value ={text} onChange={handleOnChange} id="myBox" rows="8" style={{ 
            backgroundColor: props.bmode === 'dark' ? 'black' : 'white', 
            color: props.bmode === 'dark' ? 'white' : 'black' 
        }}></textarea>
        </div>
        <button className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>Convert to UpperCase</button>
        <button className="btn btn-primary mx-2" onClick={handleLowClick}>Convert to LowerCase</button>
        <button className="btn btn-primary mx-2" onClick={removeSpaces}>Remove spaces</button>
        <button className="btn btn-primary mx-2" onClick={clearText}>Clear Text</button>
        <button className="btn btn-primary mx-2" onClick={copyClipboard}>Copy to Clipboard</button>
        </form>
    </div>
    <div className="container my-3">
        <h2>Your text summary</h2>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text}</p>
    </div>
    </>
  )
}
