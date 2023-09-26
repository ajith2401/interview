import { useState } from 'react'

function useInput(intialValue) {
    const [value, setValue] = useState(intialValue)
   
    const bindName ={
       value,
       onChange: e=>setValue(e.target.value)
    }
       
    const resetValue =  ()=>{
        setValue(intialValue)
    }
       

    

  return [value,bindName,resetValue]
}

export default useInput
