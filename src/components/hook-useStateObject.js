import React, { useState } from "react";


function ObjectWithUseState() {
  const [name, setName] = useState({ firstName: "", lastName: "" });

 

  return (
    <form>
      <label>First Name</label>
      <input id="first" type="text" value={name.firstName} onChange={e => setName({...name,firstName: e.target.value})}/>
      <label>Last Name</label>
      <input id="second" type="text" value={name.lastName} onChange={e=> setName({...name,lastName:e.target.value})}/>
      <h2>your full name is : {name.firstName} {name.lastName}</h2>
     
    </form>
  );
}

export default ObjectWithUseState;


