import React, { useEffect, useState } from 'react'
import axios from 'axios'
function FetchDataSinglePost() {
    const [posts, setPosts] = useState({})
    const [id, setId] = useState(1)
    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`).then(res => {
            setPosts(res.data)
            console.log(res)}).catch(err => console.log(err))
    },[id])
  return (
    <div>
    <input type='text' value={id}  onChange={e => setId(e.target.value)}/>
    <h1>{posts.title}</h1>
  {/*    <ul>
      {
       posts.map((posts) => 
        <li key={posts.id}>{posts.title}</li>
       )
      }</ul> */}
    </div>
  )
}

export default FetchDataSinglePost;
