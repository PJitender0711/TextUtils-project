import React, { useState } from 'react'
// import PropTypes from 'prop-types'
export default function TextForm(Props) {
    //function to convert to upper case
    const handleUpClick = () => {
        console.log("uppercase was clicked: ");
        let newText = text.toUpperCase()
        setText(newText)
        Props.showAlert("Text has been converted to upper case","success ");
    }

    //function to convert to lower case
    const handleLoClick = () => {
        console.log("lowercase was clicked: ");
        let newText = text.toLowerCase()
        setText(newText);
        Props.showAlert("Text has been converted to lower case","success ");
    }

    // function to convert the word to camel case
    // const handleCamelClick = () => {
    //     console.log("camel case was clicked: ");
    //     const words = text.trim().split(/\s+/);
    //     const camelCaseText = words.map((word, index) => {
    //         if (index === 0) {
    //             return word.toLowerCase();
    //         }
    //         return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    //     }).join(' ');
    //     setText(camelCaseText);
    // }
    

    // function to clear text in block
    const handleClearText = () =>{
        let newText = "";
        setText(newText);
        Props.showAlert("Text has been cleared","warning ");
    }
    
    // function to copy the entire text in block
    const handleCopy = ()=>{
        let text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        Props.showAlert("Text has been copied","success ");
    }

    //function to remove extra spaces
    const handleExtraSpace = ()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        Props.showAlert("Extra spaces from text has been removed","success ");
    }
    // this function let you to manke change in text box
    const handleOnChange = (event) => {
        console.log("handleOnChange was clicked");
        setText(event.target.value);
    }

    // Set state 
    const [text, setText] = useState('');

    const words = text.trim().split(/\s+/).filter(word => word !== ''); // Split and remove empty elements
    const wordCount = words.length;
    return (
        <>
            <div className='container' style={{color: Props.mode === 'light'?'#042743':'white'}}>
                <h1>{Props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} placeholder='Enter your text' onChange={handleOnChange} style={{backgroundColor: Props.mode === 'light'?'white':'grey', color: Props.mode === 'light'?'#042743':'white'}} id="myBox" rows="8"></textarea>
                </div>
                <button className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to uppercase</button>
                <button className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert to lowercase</button>
                <button className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy text</button>
                <button className="btn btn-primary mx-1 my-1" onClick={handleExtraSpace}>Clear extra space</button>
                <button className="btn btn-primary mx-1 my-1" onClick={handleClearText}>Clear</button>
            </div>
            <div className="container my-3"  style={{color: Props.mode === 'light'?'#042743':'white'}}>
                <h2>Your text Summary</h2>
                <p>{wordCount} words and {text.length} characters</p>
                <p>The time user will take to read above text is {0.008*wordCount} minutes</p>
                <h3>Preview</h3>
                <p>{text.length > 0 ? text : "Enter something in the text block to preview"}</p>
            </div>
        </>
    )
}
