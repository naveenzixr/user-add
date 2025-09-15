import { useState } from "react";
import './clock.css';
function Clock(){
    const [hours,sethours] = useState(0);
    const [min,setmin] = useState(0);
    const [sec,setsec] = useState(0);
    

    function start() {
  const timer = setInterval(() => {
    setsec((sec) => {
      if (sec === 60) {
        setmin((min) => {
          if (min === 60) {
            sethours((hours) => hours + 1);
            return 0;
          }
          return min + 1;
        });
        return 0;
      }
      return sec + 1;
    });
  }, 1000); 
}

return(
<div className="container">
<h1>{hours}:{min}:{sec}</h1>
<div className="buttons">
    <button id="start" onClick={start}>Start</button>

    <button id="stop">Stop</button>
    <button id="reset">Reset</button>
</div>
</div>
);
}
export default Clock;