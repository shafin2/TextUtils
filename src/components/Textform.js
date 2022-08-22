import React,{useState} from 'react'

export default function Textform(props) {
  const [text,setText]=useState("Enter text here")
  const [email,setEmail]=useState("No Email in text")
   
  const uppercase=()=>{
    setText(text.toUpperCase())
    if(text!==""){
      props.modify_setalert("Converted to uppercase","success")
    }
    else{
      props.modify_setalert("First enter text","primary")
    }
  }
  const lowercase=()=>{
    setText(text.toLowerCase())
    if(text!==""){
      props.modify_setalert("Converted to lowercase","success")
    }
    else{
      props.modify_setalert("First enter text","primary")
    }
  }
  const handleOnchange=(event)=>{
    setText(event.target.value)
  }
  function emailExtract(){
    let re=/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)/
    let emails=[];
    let words=text.split(" ")
    for(let i=0;i<words.length;i++){
      let match=re.test(words[i])
      if(match===true){
        emails.push(words[i])
      }
    }
    let str=emails.toString().replace(","," , ")
    if(str===""){
      setEmail("No Email in text")
      props.modify_setalert("No email found","primary")
    }
    else{
      setEmail(str)
      props.modify_setalert("Email extracted","success")
    }
  }
  const copytext=()=>{
    let textbox =document.getElementById("Textbox")
    if(text!==""){
      textbox.select()
      navigator.clipboard.writeText(textbox.value)
      props.modify_setalert("Text copied","success")
    }
    else{
      props.modify_setalert("First enter text","primary")
    }
  }
  const spaces=()=>{
    let new_text =text.split(/[ ]+/)
    setText(new_text.join(" "))
    if(text!==""){
      props.modify_setalert("Extra spaces removed","success")
    }
    else{
      props.modify_setalert("First enter text","primary")
    }
  }
  const cleartext=()=>{
    if(text===""){
      props.modify_setalert("There is already no text in textbox","primary")
    }
    else{
      setText("")
      props.modify_setalert("Cleared text","success")
    }
  }
  // if(props.mode === 'dark'){
  //   setmodeColor("light")
  // }
  // else{
  //   setmodeColor("dark")
  // }
  return (
    <>
        <h2>{props.heading}</h2>
        <div>
          <textarea className="form-control" onChange={handleOnchange} id="Textbox" rows="7" value={text}style={{backgroundColor:props.mode==='dark'?'#212529':'white' , color:props.mode==='dark'?'white':'black'}}></textarea>
       
             
              <label className={`btn btn-${props.mode==='dark'?'secondary':'primary'} my-2 mx-1 `} htmlFor="btnradio1" onClick={uppercase}>Convert to UpperCase</label>
              <label className={`btn btn-${props.mode==='dark'?'secondary':'primary'} my-2 mx-1 `} htmlFor="btnradio2" onClick={lowercase}>Convert to LowerCase</label>
              <label className={`btn btn-${props.mode==='dark'?'secondary':'primary'} my-2 mx-1`} htmlFor="btnradio3" onClick={emailExtract}>Extract Email</label>
              <label className={`btn btn-${props.mode==='dark'?'secondary':'primary'} my-2 mx-1 `} htmlFor="btnradio3" onClick={copytext}>Copy Text</label>
              <label className={`btn btn-${props.mode==='dark'?'secondary':'primary'} my-2 mx-1`} htmlFor="btnradio3" onClick={spaces}>Remove extra spaces</label>
              <label className={`btn btn-${props.mode==='dark'?'secondary':'primary'} my-2 mx-1 `} htmlFor="btnradio3" onClick={cleartext}>Clear Text</label>
        </div>
        <div className="container">
          <h1>Email in text</h1>
          <p>{email}</p>
          <h1>Text summary</h1>
          <p>{text.length>0?text.split(/\s+/).filter((a)=>{return a.length!=0}).length:"0"} Words , {text.length - (text.split(' ').length-1)} characters</p>
          <p>{0.008 * (text.length>0?text.split(" ").filter((a)=>{return a!==''}).length:"0")* 60} seconds require to read this text</p>
          <h3>Preview</h3>
          <p>{text.length>0?text:"Enter something to preview"}</p>
        </div>
    </>
  )
}