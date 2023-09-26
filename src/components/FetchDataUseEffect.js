import React, { useEffect, useState } from 'react'
import axios from 'axios'
function FetchDataUseEffect() {
    const [posts, setPosts] = useState([])
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts').then(res => {
            setPosts(res.data)
            console.log(res)}).catch(err => console.log(err))
    })
  return (
    <div>
      <ul>
      {
       posts.map((posts) => 
        <li key={posts.id}>{posts.title}</li>
       )
      }</ul>
    </div>
  )
}

export default FetchDataUseEffect;
