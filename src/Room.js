import React, {useState} from 'react';
import './Room.css';


function Room() {
    // const[isLit, setLit] = useState(true);
    let [isLit, setLit] = useState(!true);
    // console.log("State = ", state);
    let [age, setAge] = useState(1);


        //const updateAge = 

  return (
    <div className={`room ${isLit ? "Lit" : "Dark"}`}> <br/><br/><br/>
        It is now {isLit? "Morning" : "Night"}
      <br/>
      <button onClick = { () => setLit(!isLit)}> Change Day Light </button>
      <br/><br/><hr />
      <button onClick = {() => setAge(++age)}> Increase Date </button>
      Age : {age}
    </div>
  );
}

export default Room;