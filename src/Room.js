import React, {useState} from 'react';
import './Room.css';


function Room() {
    // const[isLit, setLit] = useState(true);
    let [isLit, setLit] = useState(!true);
    // console.log("State = ", state);
    let [age, setAge] = useState(23);


        //const updateAge = 

  return (
    <div>
        This Room is {isLit? "Lit" : "Dark"}
      <br/>
      <button onClick = { () => {
        console.log("Button Clicked");
        setLit(!isLit);
        
}}> Toggle Light </button>
      <br/>
      <button onClick = {() => {
        console.log("Increase Age in Button Clicked");
        setAge(++age);
}}> Increase Age </button>
      Age : {age}
    </div>
  );
}

export default Room;