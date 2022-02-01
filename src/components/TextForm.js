import React, { useState } from 'react'


export default function TextForm(props) {
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to UpperCase!", "success");
    }
    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to LowerCase!", "success");
    }
    const handleClearClick = () => {
        setText("");
        props.showAlert("Cleared the text!", "success");
    }
    const handleCopy = () => {
        let text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied the text!", "success");
    }
    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Cleared the Extra spaces!", "success");
    }
    const handleOnChange = (event) => {
        setText(event.target.value);
    }
    const [text, setText] = useState("");
    return (
        <>
            <div className="container"
                style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
                <h1 className="mb-4">{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control"
                        style={{
                            backgroundColor: props.mode === 'dark' ? '#13466e' : 'white',
                            color: props.mode === 'dark' ? 'white' : '#042743'
                        }}
                        id="myBox" rows="8" value={text} onChange={handleOnChange}></textarea>
                </div>
                <button
                    className="btn btn-primary mx-1 my-1"
                    disabled={text.length === 0}
                    onClick={handleUpClick}>Convert to Uppercase</button>
                <button
                    className="btn btn-primary mx-1 my-1"
                    disabled={text.length === 0}
                    onClick={handleLoClick}>Convert to Lowercase</button>
                <button
                    className="btn btn-primary mx-1 my-1"
                    disabled={text.length === 0}
                    onClick={handleClearClick}>Clear Text</button>
                <button
                    className="btn btn-primary mx-1 my-1"
                    disabled={text.length === 0}
                    onClick={handleCopy}>Copy Text</button>
                <button
                    className="btn btn-primary mx-1 my-1"
                    disabled={text.length === 0}
                    onClick={handleExtraSpaces}>Remove Extra Spaces</button>
            </div>
            <div className="container my-3" style={{
                color: props.mode === 'light' ? 'black' : 'white'
            }}>
                <h2>Your text summary</h2>
                <p>{text.split(' ').filter((element) => { return element.length !== 0 }).length} words and {text.length} characters</p>
                <p>{(0.008 * text.split(' ').filter((element) => { return element.length !== 0 }).length).toPrecision(2)} mintutes read</p>
                <h2>Preview</h2>
                <p>{text.length > 0 ? text : "Nothing to preview"}</p>
            </div>
        </>
    );
}
