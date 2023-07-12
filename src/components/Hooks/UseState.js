import React,{ useState } from 'react'
import "./style.css";

const UseState = () => { 
    const [myName, setmyName] = useState(10);

  return (
    <>
    <div className="center-div">
    <p>{myName}</p>
    <div className="button2"onClick={() => setmyName(myName+1)}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        INCR
    </div>
    <div className="button2" onClick={() => myName > 0 ? setmyName(myName-1) : setmyName(0) }>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        DecR
    </div>
    </div>
    </>


  )
}

export default UseState
