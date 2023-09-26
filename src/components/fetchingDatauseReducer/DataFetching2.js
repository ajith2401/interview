import React , {useReducer, useEffect} from 'react';
import axios from 'axios'


const initialState = {
    loading : true,
    error: "",
    post : {}
};

const reducer = (state,action) =>{
            switch(action.type){
                case 'SUCCESS':
                    return {
                        loading : false,
                        error : "",
                        post : action.payload
                    }
            case "FAILURE":
                return{
                    loading : false,
                    error : "something wrong DataFetching2",
                    post : {}
                }
            default:
                return state
                
        }
            }

    
    

function DataFetching2() {
    const [state, dispatch] = useReducer(reducer,initialState)
    useEffect(()=>{
  axios.get("https://jsonplaceholder.typicode.com/posts/1")
  .then(res =>{
    dispatch({type : "SUCCESS", payload : res.data})
  })
  .catch(error =>{
    dispatch({type : "FAILURE", payload : {}})
  })
    },[])
  return (
    <div>
      {
        state.loading ? "loading DataFetching2........": state.post.title
      }
      {state.error ? state.error : null}
    </div>
  )
}

export default DataFetching2
