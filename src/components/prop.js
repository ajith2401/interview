import React from "react";


function PropTuto(props){
    return(
        <div>
        <p>hello {props.name ? props.name  : "ajith"}</p></div>
    )
}

export default PropTuto