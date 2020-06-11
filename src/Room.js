import React, {useState} from 'react';
import './Room.css';


function Room() {
    // const[isLit, setLit] = useState(true);
    let [isLit, setLit] = useState(!true);
    // console.log("State = ", state);
    let [date, setDate] = useState(1);
    


        //const updateAge = 

  return (
    <div className={`room ${isLit ? "Lit" : "Dark"}`}> <br/>
    <hr />
    <h1>This is Class Work <br/><br/> </h1>
    <b>Click 'Change Day Light' Button to Change the Light</b> <br/><br/>
        It is now {isLit? "Morning" : "Night"}
      <br/>
      <button onClick = { () => setLit(!isLit)}> Change Day Light </button>
      <br/><br/><br/>
      To Increase the Date - Click Bellow Button<br/><br/>
      <button onClick = {() => setDate(++date)}> Increase Date </button><br/>
      Date:  {date}
    </div>
  );
}

export default Room;