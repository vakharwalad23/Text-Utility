import React, {useState} from 'react'


export default function TextForm(props) {
    const handleUpClick = ()=>{
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Text converted to Uppercase","success");
    }
    const handleCopy = () => {
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Coppied to Clipboard","success");
    }
    const handleclearClick = ()=>{
        let newText =('');
        setText(newText);
        props.showAlert("Text cleared","success");
    }
    const handledownClick = ()=>{
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Text converted to Lowercase","success");
    }
    const handleOnchange = (event)=>{
        setText(event.target.value);
    }
    const [text , setText] = useState('');
  return (
      <>
    <div className='container' style={{color:props.mode==='light'?'#272a2e':'white'}}>
        <div >
        <h3>{props.heading}</h3>
    <textarea className="form-control" id="myBox" value = {text} onChange={handleOnchange} style={{backgroundColor:props.mode==='light'?'white':'#272a2e',color:props.mode==='light'?'#272a2e':'white'}} rows="8"></textarea>
        </div>
        <button className="btn btn-primary my-3 mx-2" onClick={handleUpClick}>Convert to UPPER CASE</button>
        <button className="btn btn-primary my-3 mx-2" onClick={handledownClick}>Convert to lower case</button>
        <button className="btn btn-primary mx-1" onClick={handleCopy}>Copy Text</button>
        <button className="btn btn-primary my-3 mx-2" onClick={handleclearClick}>Clear Text</button>
    </div>
    <div className="container my-2" style={{color:props.mode==='light'?'#272a2e':'white'}}>
        <h2>Your text summary</h2>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length }Minutes Read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something in the above text box to  preview"}</p>
    </div>
    </>
  )
}
