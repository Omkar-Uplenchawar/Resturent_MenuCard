import React,{ useState ,useEffect} from 'react'
import "./style.css";

const UseEffects = () => { 
    const [myName, setmyName] = useState(0);

useEffect(() => {
      document.title=`chats(${myName})`;
}, [])
    

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
    </div>
    </>


  )
}

export default UseEffects