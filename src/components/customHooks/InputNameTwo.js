import useInput from './useInput'

function InputName() {
    const [firstName, bindFirstName,resetFirstName ] = useInput('')
    const [lastName, bindLastName,resetLastName] = useInput('')
    const submitHandler = ()=>{
        alert(`hello ${firstName} ${lastName}`)
        resetFirstName()
        resetLastName()
    }

  return (
    <div>
    <form onSubmit={submitHandler}>
        <label>First name</label>
        <input {...bindFirstName} type='text'/>
        <br></br>
        <label>Last name</label>
        <input {...bindLastName} type='text'/>
        <br></br>
        <button type='submit'>submit</button>
    </form>
     
    </div>
  )
}

export default InputName
