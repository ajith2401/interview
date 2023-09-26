import React, { useEffect, useRef, useState } from 'react';

function HookTImer() {
  const [timer, setTimer] = useState(0);
  const intervalRef = useRef();

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setTimer((prevTimer) => prevTimer + 1);
    }, 1000);

    return () => {
      clearInterval(intervalRef.current);
    };
  }, []);


  return (
    <div>
      <p>Hook timer {timer}</p>
      <button onClick={()=>{clearInterval(intervalRef.current)}}>Clear Hook timer</button>
    </div>
  );
}

export default HookTImer;
