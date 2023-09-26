import React, { useState , useCallback} from 'react'
import Button from './Button'
import Title from './Title123'
import Count from './Count'

function Parent() {
    const [age,setAge] =  useState(25)
    const [salary, setSalary] = useState(50000)
    const  incrementSalary  = useCallback(()=>{
    setSalary(salary+10000)
   },[salary])
   const incrementAge  = useCallback(()=>{
    setAge(age+1)
   },[age])
  return (
    <div>
      <Title/>
      <Count text="age" count={age}/>
      <Button handleclick={incrementAge}>increment age</Button>
      <Count text="salary" count={salary}/>
      <Button handleclick={incrementSalary}>increment salary</Button>
      
    </div>
  )
}

export default Parent
