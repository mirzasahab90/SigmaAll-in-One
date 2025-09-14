import React, { useState } from 'react'

export default function TextForm(props) {

  const handleOnChange = (event) => {
    SetText(event.target.value)
  }
  const handleUpClick = () => {
    let newText = Text.toUpperCase();
    SetText(newText);
  }
  const handleLoClick = () => {
    let newText = Text.toLowerCase();
    SetText(newText);
  }
  const [Text, SetText] = useState('Type Text Here')
  return (
    <>
      <div className="mb-3 my-3" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
        <h1>Enter your text to analyze</h1>
        <textarea className="form-control" value={Text} style={{ backgroundColor : props.mode === 'dark' ? '#436e92ff':'white',color: props.mode === 'dark' ? 'white' : 'black' }} onChange={handleOnChange} id="mybox" rows="9"></textarea>
        <button className='btn btn-primary my-3' onClick={handleUpClick} >Convert to UpperCase</button>
        <button className='btn btn-primary my-3 mx-3' onClick={handleLoClick} >Convert to LowerCase</button>
      </div>
      <div className="container" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
        <h3>Summary Text</h3>
        <p>{Text.split(" ").length} Word {Text.length} Characters</p>
      </div>
    </>
  )
}
