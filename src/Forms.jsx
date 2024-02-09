import { useState } from "react";

//onChange= event handler that is used primarily with form elements.
//        examples- <input>, <textrea>, <radio>, etc
// triggers a function everytime the value of the input changes


export default function Forms() {
    const [name, setName] = useState('Please write your name')

    const formHandler = (event) => setName(event.target.value)

    // for number
    const [carNumber, setCarNumber] = useState(1)

    function handlerCarNumber(event) {
        setCarNumber(event.target.value)
    }

    //for textarea
    const [comments, setComments] = useState('Please type your comments here')

    function handleComments(event){
        setComments(event.target.value)
    }


  return (
    <>
    <p>Name:</p>
    <p><input value={name} onChange={formHandler}/></p>
    <p>Number of Cars</p>
    <p><input value={carNumber} onChange={handlerCarNumber} type="number"/></p>
    <p>Comment</p>
    <p><textarea  value={comments} onChange={handleComments} type="textarea"/></p>
    </>
  )
}
