import React, { useState } from "react"


function NestedAraay() {
    const data = [
        {
        name:"India",
        value: "IN", 
        cities: [
        "Delhi",
        "Mumbai"
        ] 
        },
        {
        name: "Pak", 
        value: "PK", 
        cities: [
        "Lahore",
        "Karachi"
         ] }
        ,{ name: "Bangladesh", 
        value: "BG",
        cities:[
        "Dhaka",
        "Chittagong"
        ] }
    ]

    const [country, setCountry] = useState(undefined)
  return (
    <div>
    <select id="country" name="country" onChange={(e)=>setCountry(e.target.value)}>
    <option value={"None"} defaultValue={"None"}>None</option>
    {data.map((item,index)=> 
        <option key={index} value={index}>{item.name}
        </option>)}
    </select>
    { 
        
   (country !== undefined && data[country] !== undefined ) &&
    <select id="cities" name="cities">
    <option value={"None"} defaultValue={"None"}>None</option>
    {data[country].cities.map((item,index)=>
    <option key={index} value={index}>{item}
    </option>)}
    </select>
    }
    </div>
  )
}

export default NestedAraay
