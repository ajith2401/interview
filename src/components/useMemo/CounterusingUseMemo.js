import React, { useMemo, useState } from 'react';

function CounterusingUseMemo() {
  const [countOne, setCountOne] = useState(0);
  const [countTwo, setCountTwo] = useState(0);

  function incrementOne() {
    setCountOne(countOne + 1);
  }

  function incrementTwo() {
    setCountTwo(countTwo + 1);
  }

  const isEven = useMemo(()=>{
    let i  = 0
    while (i <200000000000)
    return countOne % 2 === 0
  },[countOne])

  return (
    <div>
      <p>count one {countOne}</p>
      <span>{isEven ? "even": "odd"}</span>
      <br></br>
      <button onClick={incrementOne}>increment one</button>

      <p>count two {countTwo}</p>
      <button onClick={incrementTwo}>increment two</button>
    </div>
  );
}

export default CounterusingUseMemo;
