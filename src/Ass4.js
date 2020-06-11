import React, {useState} from 'react';
import './Ass4.css';


function Ass4() {

    let [isLitON, setLitON] = useState(true);
    let [tempF , setTempF] = useState(23);

    return (
    <div className={`light ${isLitON? "ON": "OFF"}`}> 
        <h2>Room Light is {isLitON? "ON": "OFF"}</h2>
        <br/>
        <button className='button' onClick={()=> setLitON(true) } >ON</button>
        <button  className='button' onClick={()=> setLitON(false) } >OFF</button>
        <br/>
        <h2> Current Temperature in Celcius is: {tempF}</h2>
        <br/>
        <p> Increase or Decrease the Temperature to get the Weather Update</p>
        <p> The Weather is {tempF > 40 ? "too Hot today"  : "Fine today "} </p>
        <button  className='button' title="Increase Temperature" onClick={()=> setTempF(++tempF)}>Inc Temp '+'</button>
        <button  className='button' title="Decrease Temperature" onClick={()=> setTempF(--tempF)}>Dec Temp '-'</button>
    
    </div>
   
  );
}

export default Ass4;