import React from 'react'
import { Outlet, useSearchParams } from 'react-router-dom'

function Users() {
    const [searchParams,setSearchParams] = useSearchParams()
    const isActive = searchParams.get('filter') === 'active'
    const users = [1,2,3,4,5,6]
  return (
    <div>
    {
        users.map((item)=>(
            <h1>User {item}</h1>
        ))
    }
    <Outlet/>
    <button onClick={()=> setSearchParams({filter:"active"})}> Active users</button>
    <button onClick={()=>setSearchParams({})}> all users</button>
    {
        isActive ? <h1>  showing Acitve users</h1> : <h1> showing All users </h1>
    }
    </div>
    
  )
}

export default Users
