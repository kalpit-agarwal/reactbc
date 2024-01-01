import React,{useState} from 'react'


export default function TextForm(props) {
    const HandleUpClick = ()=>{
        // console.log("UPPERCASE WAS CLICKED" + text)
        let newText=text.toUpperCase();
        setText(newText)
    }
    const ClearText = ()=>{
        // console.log("UPPERCASE WAS CLICKED" + text)
        let newText="";
        setText(newText)
    }
    const handleOnChange = (event)=>{
        // console.log("ON Change");
        setText(event.target.value);
    }
    const HandleLoClick = ()=>{
        // console.log("UPPERCASE WAS CLICKED" + text)
        let newText=text.toLowerCase();
        setText(newText)
    }

    const handleSpaces= ()=>{
        // console.log("UPPERCASE WAS CLICKED" + text)
        let newText=text.split(/[ ]+/);
        setText(newText.join(" "));
    }


    const CopyText = ()=>{
        var text=document.getElementById("myBox")
        text.select()
        navigator.clipboard.writeText(text.value)
    }
    const [text, setText] = useState('');
    return (
            <>
        <div className='container' style={{color : props.mode==='light'?'#042743':'white'}} >
    <h1>{props.heading} </h1>
  <div className="form-group">
    <textarea className="form-control" value={text} style={{backgroundColor : props.mode==='light'?'white':'black',color : props.mode==='light'?'black':'white'}} onChange={handleOnChange} id="myBox" rows="8"></textarea>
  </div>
<button className="btn btn-primary mx-2" onClick={HandleUpClick}>Convert to uppercase</button>
<button className="btn btn-primary mx-2" onClick={HandleLoClick}>Convert to lowercase</button>
<button className="btn btn-primary mx-2" onClick={ClearText}>Clear Text</button>
<button className="btn btn-primary mx-2" onClick={CopyText}>Copy Text</button>
<button className="btn btn-primary mx-2" onClick={handleSpaces}>Remove Extra Spaces</button>
    </div>
    <div className="container my-3" style={{color : props.mode==='light'?'black':'white'}}>
            <h2>Your text summary</h2>
            <p>{text.split(" ").length}words and {text.length} characters</p>
            <p>{0.008 *text.split(" ").length} minutes to read</p>
            <h2>Preview</h2>
            <p>{text.length > 0?text:" Enter something in the chatbox to preview it over here"}</p>
    </div>
    </>
  )
}
