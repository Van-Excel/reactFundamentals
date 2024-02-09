// React hooks- special functions that allow functional components to use
//              react features without writing class components.
// include (useState, useEffect, useContext, useReducer, useCallback)





import   {useState} from "react";

export default function Counter() {
    const [count, setCounter] = useState(0);

    const clickCounter = () => {
        setCounter(count + 1)
    }


  return (
    <>
    <h2>{count}</h2>
    <button onClick={clickCounter}>Click Me</button>
     
    </>
  )
}


//topics to revise
//array & object destructuring
//spread operator