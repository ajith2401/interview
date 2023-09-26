import React from "react";

class Counter extends React.Component{
  constructor(){
    super()
    this.state = { count : 0 , time: 0}
  }

  componentDidMount(){
    this.timeInterval = setInterval(()=>{
      this.setState((prevState)=>({
        time: prevState.time+1
      }))
    },1000)
  }

  componentWillUnmount(){
    clearInterval(this.state.time)
  }

  increment(){
    this.setState((prevState)=>({
      count:prevState.count+1
    }))
  }

  render(){
    return(
      <div>
      <p>
      time: {this.state.time}</p>
      <p>
      class state count: {this.state.count}</p>
      <button onClick={()=>this.increment()}>inc</button>
      </div>
    )
  }
}

export default Counter;