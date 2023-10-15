import React, {useState} from 'react'
import propTypes from 'prop-types'

export default function TextForm(props) {
    const handleUpClick = () => {
        // console.log("Uppercase was clicked - " + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase successfully!", "success");
    }

    const handleLoClick = () => {
        // console.log("Lowercase was clicked - " + text);
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lowercase successfully!", "success");
    }

    const handleClearClick = () => {
        // console.log("Lowercase was clicked - " + text);
        let newText = '';
        setText(newText);
        props.showAlert("Text has been removed successfully!", "success");
    }

    const handleOnChange = () => {
        // console.log("On Change");
        setText(event.target.value);
    }

    const handleCopy = () => {
        // console.log("Text Copied");
        let newtext = document.getElementById("mybox");
        newtext.select();
        navigator.clipboard.writeText(newtext.value);
        props.showAlert("Text has been copied successfully!", "success");
    }

    // const handlePaste = async () => {
    //     // console.log("Text Copied");
    //     const fromClipboard = await navigator.clipboard.readText(); 
    //     let newtext = document.getElementById("mybox");
    //     newtext.value = fromClipboard;
    // }

    const handleExtraSpaces = () => {
        // console.log("Handling Extra Spaces");
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces has been removed successfully!", "success");
    }

    const [text, setText] = useState('');
    // to change the value of text we have to use setText() as a function
    // setText('new text') will change the value of text to 'new text' 
    return (
        <>
            <div class="container">
                <h2>{props.heading}</h2>
                <div class="mb-3">
                    <label for="mybox" class="form-label"></label>
                    <textarea class="form-control" value={text} onChange={handleOnChange} id="mybox" rows="8"></textarea>
                </div>
                <button class={`btn btn-outline-${props.mode == 'light'? 'primary':'info'} m-2`} onClick={handleUpClick}>Convert to Uppercase</button>
                <button class={`btn btn-outline-${props.mode == 'light'? 'primary':'info'} m-2`} onClick={handleLoClick}>Convert to Lowercase</button>
                <button class={`btn btn-outline-${props.mode == 'light'? 'primary':'info'} m-2`} onClick={handleClearClick}>Clear text</button>
                <button class={`btn btn-outline-${props.mode == 'light'? 'primary':'info'} m-2`} onClick={handleCopy}>Copy text</button>
                <button class={`btn btn-outline-${props.mode == 'light'? 'primary':'info'} m-2`} onClick={handleExtraSpaces}>Remove Extra Spaces</button>
                {/* <button class="btn btn-primary m-2" onClick={handlePaste}>Paste text</button> */}
            
            </div>
            <div className="container my-3">
                <h2>Your text summary</h2>
                <p>{text.split(" ").length - 1} words ans {text.length} characters</p>
                <p>{0.008*(text.split(" ").length - 1)} Minutes read</p>
                <h2>Preview</h2>
                <p>{text.length>0?text:"Enter text into the text box to preview!"}</p>
            </div>
        </>
    )
}

TextForm.propTypes ={
    heading: propTypes.string.isRequired
}

TextForm.defaultProps = {
    heading: 'Set heading here'
}