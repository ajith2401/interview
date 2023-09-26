import React, { useState } from 'react'

function InputName() {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const submitHandler = ()=>{
        alert(`hello ${firstName} ${lastName}`)
    }

  return (
    <div>
    <form onSubmit={submitHandler}>
        <label>First name</label>
        <input value={firstName} onChange={e=>{setFirstName(e.target.value)}} type='text'/>
        <br></br>
        <label>Last name</label>
        <input value={lastName} onChange={e=>{setLastName(e.target.value)}} type='text'/>
        <br></br>
        <button type='submit'>submit</button>
    </form>
     
    </div>
  )
}

export default InputName
